export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="relative z-10 max-w-2xl">
          {/* Badge promocional */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold text-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <span>🦷</span>
            <span>PROMO — 20% OFF en tratamiento Invisalign</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            Transforma tu sonrisa con{" "}
            <span className="text-yellow-300">Invisalign</span>
          </h1>

          <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            Alineadores transparentes, cómodos y removibles. Sin brackets, sin
            incomodidad. El tratamiento más avanzado del mercado, ahora con
            descuento exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#turnos"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-full text-center transition-colors shadow-md"
            >
              Reservar consulta gratuita
            </a>
            <a
              href="#servicios"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold px-6 py-3 rounded-full text-center transition-colors"
            >
              Conocer más
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-4 mt-10 text-sm text-blue-100">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Sin dolor
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              100% transparente
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Consulta inicial gratis
            </span>
          </div>
        </div>

        {/* Decoración SVG desktop */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <ellipse cx="200" cy="250" rx="180" ry="220" fill="white"/>
            <ellipse cx="200" cy="200" rx="120" ry="150" fill="white" opacity="0.5"/>
            <circle cx="200" cy="350" r="60" fill="white" opacity="0.3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
