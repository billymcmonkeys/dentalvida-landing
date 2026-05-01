import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System — DentaVida",
  description: "Tokens y componentes del sistema de diseño DentaVida.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const colorPalette = [
  {
    group: "Blue — primario",
    colors: [
      { name: "blue-50", hex: "#eff6ff", token: "bg-blue-50", light: true },
      { name: "blue-100", hex: "#dbeafe", token: "bg-blue-100", light: true },
      { name: "blue-200", hex: "#bfdbfe", token: "bg-blue-200", light: true },
      { name: "blue-300", hex: "#93c5fd", token: "bg-blue-300", light: true },
      { name: "blue-400", hex: "#60a5fa", token: "bg-blue-400", light: true },
      { name: "blue-500", hex: "#3b82f6", token: "bg-blue-500", light: false },
      { name: "blue-600", hex: "#2563eb", token: "bg-blue-600", light: false },
      { name: "blue-700", hex: "#1d4ed8", token: "bg-blue-700", light: false },
      { name: "blue-800", hex: "#1e40af", token: "bg-blue-800", light: false },
      { name: "blue-900", hex: "#1e3a8a", token: "bg-blue-900", light: false },
    ],
  },
  {
    group: "Slate — texto / fondos neutros",
    colors: [
      { name: "slate-50", hex: "#f8fafc", token: "bg-slate-50", light: true },
      { name: "slate-100", hex: "#f1f5f9", token: "bg-slate-100", light: true },
      { name: "slate-200", hex: "#e2e8f0", token: "bg-slate-200", light: true },
      { name: "slate-300", hex: "#cbd5e1", token: "bg-slate-300", light: true },
      { name: "slate-400", hex: "#94a3b8", token: "bg-slate-400", light: true },
      { name: "slate-500", hex: "#64748b", token: "bg-slate-500", light: false },
      { name: "slate-600", hex: "#475569", token: "bg-slate-600", light: false },
      { name: "slate-700", hex: "#334155", token: "bg-slate-700", light: false },
      { name: "slate-800", hex: "#1e293b", token: "bg-slate-800", light: false },
    ],
  },
  {
    group: "Yellow — acento / promocional",
    colors: [
      { name: "yellow-300", hex: "#fde047", token: "bg-yellow-300", light: true },
      { name: "yellow-400", hex: "#facc15", token: "bg-yellow-400", light: true },
      { name: "yellow-500", hex: "#eab308", token: "bg-yellow-500", light: true },
    ],
  },
  {
    group: "Green — éxito / confirmación",
    colors: [
      { name: "green-50", hex: "#f0fdf4", token: "bg-green-50", light: true },
      { name: "green-200", hex: "#bbf7d0", token: "bg-green-200", light: true },
      { name: "green-600", hex: "#16a34a", token: "bg-green-600", light: false },
      { name: "green-700", hex: "#15803d", token: "bg-green-700", light: false },
    ],
  },
];

const typeSizes = [
  { label: "text-xs", size: "0.75rem / 12px", className: "text-xs" },
  { label: "text-sm", size: "0.875rem / 14px", className: "text-sm" },
  { label: "text-base", size: "1rem / 16px", className: "text-base" },
  { label: "text-lg", size: "1.125rem / 18px", className: "text-lg" },
  { label: "text-xl", size: "1.25rem / 20px", className: "text-xl" },
  { label: "text-2xl", size: "1.5rem / 24px", className: "text-2xl" },
  { label: "text-3xl", size: "1.875rem / 30px", className: "text-3xl" },
  { label: "text-4xl", size: "2.25rem / 36px", className: "text-4xl" },
  { label: "text-5xl", size: "3rem / 48px", className: "text-5xl" },
  { label: "text-6xl", size: "3.75rem / 60px", className: "text-6xl" },
];

const typeWeights = [
  { label: "font-normal", weight: "400", className: "font-normal" },
  { label: "font-medium", weight: "500", className: "font-medium" },
  { label: "font-semibold", weight: "600", className: "font-semibold" },
  { label: "font-bold", weight: "700", className: "font-bold" },
  { label: "font-extrabold", weight: "800", className: "font-extrabold" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path d="M14 2C10 2 7 5 7 8c0 2 .5 3.5 1 5l1 8c.3 1.5 1 2 2 2h1c1 0 1.5-.5 2-2l.5-3 .5 3c.5 1.5 1 2 2 2h1c1 0 1.7-.5 2-2l1-8c.5-1.5 1-3 1-5 0-3-3-6-7-6z" fill="#2563EB" opacity="0.9"/>
            </svg>
            <span className="font-bold text-slate-800">DentaVida</span>
            <span className="text-slate-300">/</span>
            <span className="text-sm text-slate-500 font-medium">Design System</span>
          </div>
          <a
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← Volver al sitio
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">

        {/* Intro */}
        <section>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Design System</h1>
          <p className="text-slate-500 text-lg">
            Tokens de diseño y componentes utilizados en la landing de DentaVida.
          </p>
        </section>

        {/* ── COLORES ──────────────────────────────────────────────────────── */}
        <section id="colores">
          <SectionTitle label="01" title="Colores" />

          <div className="flex flex-col gap-10 mt-8">
            {colorPalette.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  {group.group}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {group.colors.map((c) => (
                    <div key={c.name} className="flex flex-col gap-2">
                      <div
                        className="h-16 rounded-xl border border-slate-200"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <p className="text-xs font-semibold text-slate-700">{c.name}</p>
                        <p className="text-xs text-slate-400 font-mono">{c.hex}</p>
                        <p className="text-xs text-slate-400 font-mono">{c.token}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPOGRAFÍA ───────────────────────────────────────────────────── */}
        <section id="tipografia">
          <SectionTitle label="02" title="Tipografía" />

          {/* Familia */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Familia tipográfica
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-slate-400 font-mono w-40 shrink-0">font-sans (body)</span>
                <span className="text-2xl text-slate-800" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Arial, Helvetica, sans-serif
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Ñn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
              <p className="text-slate-400 text-sm">
                0 1 2 3 4 5 6 7 8 9 — ! ? ¿ ¡ : ; , . " ' @ # $ % & / ( )
              </p>
            </div>
          </div>

          {/* Tamaños */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Tamaños
            </h3>
            <div className="flex flex-col gap-5 divide-y divide-slate-100">
              {typeSizes.map((t) => (
                <div key={t.label} className="flex items-baseline gap-6 pt-4 first:pt-0">
                  <div className="w-36 shrink-0">
                    <span className="text-xs font-mono text-blue-600">{t.label}</span>
                    <p className="text-xs text-slate-400 font-mono">{t.size}</p>
                  </div>
                  <span className={`${t.className} text-slate-800 leading-none`}>
                    DentaVida — Tu sonrisa
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pesos */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Pesos
            </h3>
            <div className="flex flex-col gap-4 divide-y divide-slate-100">
              {typeWeights.map((w) => (
                <div key={w.label} className="flex items-baseline gap-6 pt-4 first:pt-0">
                  <div className="w-36 shrink-0">
                    <span className="text-xs font-mono text-blue-600">{w.label}</span>
                    <p className="text-xs text-slate-400 font-mono">{w.weight}</p>
                  </div>
                  <span className={`${w.className} text-2xl text-slate-800`}>
                    DentaVida
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPONENTES ──────────────────────────────────────────────────── */}
        <section id="componentes">
          <SectionTitle label="03" title="Componentes" />

          {/* Buttons */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Botones
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Primary */}
              <div className="flex flex-col items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm">
                  Reservar turno
                </button>
                <span className="text-xs text-slate-400">Primary</span>
              </div>

              {/* Secondary */}
              <div className="flex flex-col items-center gap-2">
                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-full border border-blue-200 transition-colors text-sm shadow-sm">
                  Conocer más
                </button>
                <span className="text-xs text-slate-400">Secondary</span>
              </div>

              {/* Outline dark */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-700 p-3 rounded-xl">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold px-6 py-3 rounded-full transition-colors text-sm">
                    Conocer más
                  </button>
                </div>
                <span className="text-xs text-slate-400">Outline (dark bg)</span>
              </div>

              {/* Ghost */}
              <div className="flex flex-col items-center gap-2">
                <button className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                  Enlace de texto
                </button>
                <span className="text-xs text-slate-400">Ghost / link</span>
              </div>

              {/* CTA form */}
              <div className="flex flex-col items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">
                  Enviar mensaje
                </button>
                <span className="text-xs text-slate-400">CTA form (rounded-xl)</span>
              </div>
            </div>
          </div>

          {/* Badge / Pill */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Badges y pills
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold text-sm px-4 py-2 rounded-full shadow-sm">
                  <span>🦷</span>
                  <span>PROMO — 20% OFF</span>
                </div>
                <span className="text-xs text-slate-400">Badge promocional</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Odontología
                </span>
                <span className="text-xs text-slate-400">Tag / chip</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-1.5 text-sm text-blue-100 bg-blue-700 px-3 py-1.5 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Sin dolor
                </span>
                <span className="text-xs text-slate-400">Info pill (dark)</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service card */}
              <div>
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col gap-3">
                  <div className="bg-blue-100 rounded-xl p-3 w-fit">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                      <path d="M20 4C14 4 10 8 10 13c0 3 .7 5 1.5 7.5L13 32c.5 2 1.5 3 3 3h1.5c1.5 0 2.2-.8 3-3l.7-4.5.7 4.5c.8 2.2 1.5 3 3 3H26c1.5 0 2.5-1 3-3l1.5-11.5c.8-2.5 1.5-4.5 1.5-7.5 0-5-4-9-12-9z" fill="#2563EB" opacity="0.85"/>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-slate-800">Servicio card</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Card con borde blue-100, hover effect y shadow. Usada en sección Servicios.
                  </p>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">Service card</p>
              </div>

              {/* Dental health card */}
              <div>
                <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start border border-slate-100">
                  <div className="mt-0.5 shrink-0 bg-blue-100 rounded-xl p-2.5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">Info card</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Card con ícono a la izquierda. Usada en Salud Dental.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">Dental health card</p>
              </div>

              {/* Highlight card */}
              <div>
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <p className="font-bold text-lg mb-1">Highlight card</p>
                  <p className="text-blue-200 text-sm">Subtítulo o rol</p>
                  <p className="text-blue-100 text-sm mt-3">
                    Card de acento con fondo blue-600. Usada para destacar información clave.
                  </p>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">Highlight card (blue)</p>
              </div>
            </div>
          </div>

          {/* Form inputs */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Form inputs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {/* Text input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Ej: María González"
                  readOnly
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
                <p className="text-xs text-slate-400 mt-1">Input — estado normal</p>
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  placeholder="Contanos en qué podemos ayudarte..."
                  rows={3}
                  readOnly
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                />
                <p className="text-xs text-slate-400 mt-1">Textarea</p>
              </div>

              {/* Success state */}
              <div>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
                  <div className="text-2xl mb-2">✓</div>
                  <h4 className="text-base font-bold text-green-700 mb-1">¡Mensaje enviado!</h4>
                  <p className="text-green-600 text-sm">Gracias por contactarnos.</p>
                </div>
                <p className="text-xs text-slate-400 mt-1">Estado success</p>
              </div>

              {/* Info box */}
              <div>
                <div className="bg-blue-50 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-800 mb-2 text-sm">Horarios</h4>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Lunes a Viernes</span>
                    <span className="font-semibold">9:00 – 20:00</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-1">Info box (blue-50)</p>
              </div>
            </div>
          </div>

          {/* Navbar preview */}
          <div className="mt-4 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-700 text-white text-xs font-mono px-4 py-2 flex items-center gap-2">
              <span className="text-slate-400">Componente:</span>
              <span>Navbar</span>
            </div>
            <div className="border-b border-blue-100 shadow-sm">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                  <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
                    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                      <path d="M14 2C10 2 7 5 7 8c0 2 .5 3.5 1 5l1 8c.3 1.5 1 2 2 2h1c1 0 1.5-.5 2-2l.5-3 .5 3c.5 1.5 1 2 2 2h1c1 0 1.7-.5 2-2l1-8c.5-1.5 1-3 1-5 0-3-3-6-7-6z" fill="#2563EB" opacity="0.9"/>
                    </svg>
                    DentaVida
                  </div>
                  <div className="hidden md:flex items-center gap-5">
                    {["Servicios", "Salud Dental", "Turnos", "Contacto"].map((l) => (
                      <span key={l} className="text-slate-600 font-medium text-sm">{l}</span>
                    ))}
                    <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Reservar turno
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-2 text-xs text-slate-400">
              Sticky top-0, z-50 — bg-white / shadow-sm / border-b border-blue-100
            </div>
          </div>

          {/* Footer preview */}
          <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-700 text-white text-xs font-mono px-4 py-2 flex items-center gap-2">
              <span className="text-slate-400">Componente:</span>
              <span>Footer</span>
            </div>
            <div className="bg-slate-800 text-white px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 font-bold text-white mb-1 text-sm">
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                      <path d="M14 2C10 2 7 5 7 8c0 2 .5 3.5 1 5l1 8c.3 1.5 1 2 2 2h1c1 0 1.5-.5 2-2l.5-3 .5 3c.5 1.5 1 2 2 2h1c1 0 1.7-.5 2-2l1-8c.5-1.5 1-3 1-5 0-3-3-6-7-6z" fill="#93C5FD"/>
                    </svg>
                    DentaVida
                  </div>
                  <p className="text-slate-400 text-xs">Tu sonrisa, nuestra pasión.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2 text-xs uppercase tracking-wide">Navegación</h4>
                  <ul className="flex flex-col gap-1">
                    {["Servicios", "Salud Dental"].map((l) => (
                      <li key={l} className="text-slate-400 text-xs">{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2 text-xs uppercase tracking-wide">Seguinos</h4>
                  <p className="text-slate-400 text-xs font-medium">@dentavida.ba</p>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4 text-center text-slate-500 text-xs">
                © 2025 DentaVida. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </section>

        {/* ── ESPACIADO Y BORDES ────────────────────────────────────────── */}
        <section id="espaciado">
          <SectionTitle label="04" title="Espaciado y radios" />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Border radius */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                Border radius
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { token: "rounded-xl", px: "12px", desc: "Inputs, buttons form" },
                  { token: "rounded-2xl", px: "16px", desc: "Cards, modales" },
                  { token: "rounded-full", px: "9999px", desc: "Pills, botones CTA" },
                ].map((r) => (
                  <div key={r.token} className="flex items-center gap-4">
                    <div
                      className="w-16 h-10 bg-blue-100 border border-blue-200 shrink-0"
                      style={{ borderRadius: r.px }}
                    />
                    <div>
                      <span className="text-xs font-mono text-blue-600">{r.token}</span>
                      <p className="text-xs text-slate-400">{r.px} — {r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                Sombras
              </h3>
              <div className="flex flex-col gap-6">
                {[
                  { token: "shadow-sm", desc: "Cards por defecto" },
                  { token: "shadow-md", desc: "Cards hover" },
                  { token: "shadow-lg", desc: "Badges destacados" },
                ].map((s) => (
                  <div key={s.token} className="flex items-center gap-4">
                    <div
                      className={`w-16 h-10 bg-white rounded-xl border border-slate-100 shrink-0 ${s.token}`}
                    />
                    <div>
                      <span className="text-xs font-mono text-blue-600">{s.token}</span>
                      <p className="text-xs text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-400 text-xs pb-8">
          Design System — DentaVida Landing · mcBilly + mcCamila
        </footer>
      </main>
    </div>
  );
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-slate-200 pb-4">
      <span className="text-xs font-mono text-blue-400 font-semibold">{label}</span>
      <h2 className="text-2xl font-extrabold text-slate-800">{title}</h2>
    </div>
  );
}
