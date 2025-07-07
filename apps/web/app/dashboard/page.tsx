import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function DashboardPage() {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
     redirect('/') // si no hay sesión, redirige al login
    }

    return (
    <div className="min-h-screen bg-white text-black p-8">
        <h1 className="text-3xl font-bold">Bienvenido a Kivoff OS</h1>
        <p className="mt-2">Usuario: {session.user.email}</p>
    </div>
    )
}
