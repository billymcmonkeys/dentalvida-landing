"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Salud Dental", href: "#salud-dental" },
    { label: "Turnos", href: "#turnos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C10 2 7 5 7 8c0 2 .5 3.5 1 5l1 8c.3 1.5 1 2 2 2h1c1 0 1.5-.5 2-2l.5-3 .5 3c.5 1.5 1 2 2 2h1c1 0 1.7-.5 2-2l1-8c.5-1.5 1-3 1-5 0-3-3-6-7-6z" fill="#2563EB" opacity="0.9"/>
              <path d="M10 8c0-2 1.8-4 4-4" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            DentaVida
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#turnos"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Reservar turno
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-slate-600 hover:text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#turnos"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors text-center"
            >
              Reservar turno
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
