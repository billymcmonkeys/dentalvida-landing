const points = [
  {
    title: "Prevención",
    text: "Un control semestral puede evitar tratamientos costosos y dolorosos. La prevención es siempre la mejor inversión para tu salud.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Confianza",
    text: "Una sonrisa sana transforma tu autoestima. Mejora tus relaciones personales y profesionales, y proyectá seguridad en cada encuentro.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: "Salud General",
    text: "La salud bucal está directamente vinculada con enfermedades cardiovasculares, diabetes y otras condiciones sistémicas. Cuidar tu boca es cuidar todo tu cuerpo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Calidad de Vida",
    text: "Masticá bien, hablá con claridad y sonreí sin dolor ni incomodidad. Una buena salud dental impacta directamente en tu calidad de vida diaria.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

export default function DentalHealth() {
  return (
    <section id="salud-dental" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            ¿Por qué cuidar tu salud dental?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Muchas personas visitan al dentista solo cuando tienen dolor. Sin embargo,
            la atención regular es clave para prevenir problemas mayores y mantener
            tu bienestar general.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 shadow-sm flex gap-5 items-start"
            >
              <div className="mt-0.5 shrink-0 bg-blue-100 rounded-xl p-2.5">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
