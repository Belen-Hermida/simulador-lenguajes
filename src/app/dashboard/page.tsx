'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useUser } from '../context/UserContext'

const temas = [
  'Inglés', 'Italiano', 'Español', 'Francés', 'Portugués', 'Rumano',
  'Alemán', 'Sueco', 'Vietnamita', 'Turco', 'Indonesio', 'Malayo',
  'Swahili', 'Hausa', 'Filipino'
]

export default function DashboardPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()

  if (isLoading || !user) {
    return <p className="text-center mt-10 text-white">Cargando...</p>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-gray-800 shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-200 mb-4">🎓 Panel del Usuario</h1>
        <p className="text-gray-400 mb-6">Bienvenido</p>
        <div className="flex justify-center gap-6 mb-6 text-sm text-indigo-400">
          <Link href={`/resultados/alumnos/${user.id}`} className="hover:underline">Ver resultados anteriores</Link>
          <Link href={`/usuarios/editar/${user.id}`} className="hover:underline">Editar perfil</Link>
        </div>
        <p className="text-xl font-semibold text-indigo-300 mb-4">
          Selecciona un idioma para comenzar:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {temas.map((tema) => (
            <Link
              key={tema}
              href={`/quiz/${tema.toLowerCase()}`}
              className="flex items-center gap-4 bg-gray-900 hover:bg-indigo-600 text-white py-3 px-4 rounded-xl transition shadow-md"
            >
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">{tema[0]}</span>
              <span className="text-lg">{tema}</span>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link href={`/dudas/${user.id}`} className="text-sm text-indigo-400 hover:underline">
            ¿Dudas sobre idiomas? Presiona aquí
          </Link>
        </div>
      </div>
    </div>
  )
}