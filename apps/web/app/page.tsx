'use client'
import React from "react"
import { useState } from "react"
import { supabase } from "./lib/supabase"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter() // 👈
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAuth = async () => {
    setLoading(true)
    setError('')
    try {
      const { error } = isLogin
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

      if (error) throw error

       // ✅ Redirigir si fue login
        if (isLogin) {
          router.push('/dashboard')
        } else {
          alert('¡Registro exitoso! Revisa tu correo electrónico para confirmar.')
        }

    } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.message === 'Invalid login credentials') {
              alert('Credenciales inválidas. Por favor, verifica tu correo y contraseña.')
          } else if (err.message === 'Email no confirmado') {
            setError('Deber confirmar tu correo antes de iniciar sesión.')
          } else {
            setError(err.message)
          }
        }
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
      {/* LOGO */}
      <div className="absolute top-6 left-6 items-center gap-2">
        <Image
          src="/kivoff.png"
          alt="Kivoff Logo"
          width={220}
          height={90}
          className="h-15 w-36" 
          priority
          />
        <span className="text-2xl font-bold text-black"></span>
      </div>

      <div className="w-full max-w-md space-y-7">
        <div className="text-left">
          <h2 className="text-2xl font-sans font-medium text-black">Inicia sesión en tu cuenta</h2>
          <p className="text-sm font-sans text-gray-500">Introduce tu correo electrónico y contraseña</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 font-sans placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="contraseña"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 font-sans placeholder:text-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

        {isLogin && (
          <div className="text-right">
            <a href="#" className="text-gray-500 text-sm hover:underline font-sans">
                Olvidé mi contraseña
            </a>
          </div>
        )}
        </div>

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-900 transition text-sm font-sans font-medium"
          >
            {loading ? 'Procesando...' :`iniciar sesión ${isLogin ?  '' : ''}`}
          </button>

          <div className="text-sm text-center text-sans">
            {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
            {' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black underline font-sans"
            >
              {isLogin ? 'Regístrate' : 'Iniciar sesión'}
            </button>
          </div>

        <p className="text-sm text-gray-500 text-center font-sans">
          {isLogin
            ? 'Si tienes una cuenta existente, por favor inicie sesión.'
            : 'Puedes crear una nueva cuenta usando tu correo electrónico y contraseña.'}
        </p>
      </div>
    </div>
  )
}