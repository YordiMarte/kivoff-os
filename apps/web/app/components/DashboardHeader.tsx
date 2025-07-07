'use client'

import { useEffect, useState } from "react"

export default function DashboardHeader() {
    const [date, setDate] = useState('')

    useEffect(() => {
        const today = new Date()
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }
        const formatted = today.toLocaleDateString('es-ES', options)
        setDate(formatted)
    }, [])

    return (
        <header className="w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-semibold">Hola 👋</h2>
                <p className="text-gray-500 text-sm">{date}</p>
            </div>
        </header>
    )
}