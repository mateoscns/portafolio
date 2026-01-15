export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Página no encontrada</h2>
        <p className="text-gray-400 mb-6">La página que buscas no existe.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}