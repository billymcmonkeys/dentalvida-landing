export default function Footer() {
  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Salud Dental", href: "#salud-dental" },
    { label: "Turnos", href: "#turnos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M14 2C10 2 7 5 7 8c0 2 .5 3.5 1 5l1 8c.3 1.5 1 2 2 2h1c1 0 1.5-.5 2-2l.5-3 .5 3c.5 1.5 1 2 2 2h1c1 0 1.7-.5 2-2l1-8c.5-1.5 1-3 1-5 0-3-3-6-7-6z" fill="#93C5FD"/>
              </svg>
              DentaVida
            </div>
            <p className="text-slate-400 text-sm">Tu sonrisa, nuestra pasión.</p>
            <p className="text-slate-400 text-sm mt-1">Av. Corrientes 1842, Buenos Aires</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-300 mb-3 text-sm uppercase tracking-wide">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-300 mb-3 text-sm uppercase tracking-wide">Seguinos</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              <span className="font-medium text-white">@dentavida.ba</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
          © 2025 DentaVida. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
