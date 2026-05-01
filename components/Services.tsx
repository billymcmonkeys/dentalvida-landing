const services = [
  {
    title: "Salud Dental Integral",
    description:
      "Controles periódicos, limpieza profesional y detección temprana de caries. Cuidamos tu salud bucal en cada etapa de tu vida.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C14 4 10 8 10 13c0 3 .7 5 1.5 7.5L13 32c.5 2 1.5 3 3 3h1.5c1.5 0 2.2-.8 3-3l.7-4.5.7 4.5c.8 2.2 1.5 3 3 3H26c1.5 0 2.5-1 3-3l1.5-11.5c.8-2.5 1.5-4.5 1.5-7.5 0-5-4-9-12-9z" fill="#2563EB" opacity="0.85"/>
        <path d="M15 13c0-3 2.5-6 5-6" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Odontología Infantil",
    description:
      "Especialistas en el cuidado dental de niños desde los 2 años. Un espacio amigable y sin miedo, donde los chicos aprenden a amar al dentista.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" fill="#DBEAFE"/>
        <circle cx="15" cy="17" r="2" fill="#2563EB"/>
        <circle cx="25" cy="17" r="2" fill="#2563EB"/>
        <path d="M13 25c1.5 3 12.5 3 14 0" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aparatos y Ortodoncia",
    description:
      "Brackets metálicos, cerámicos e Invisalign. Corregimos tu mordida y alineamos tus dientes con la tecnología más avanzada disponible.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="24" height="10" rx="3" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5"/>
        <rect x="12" y="18" width="4" height="6" rx="1" fill="#2563EB" opacity="0.7"/>
        <rect x="18" y="18" width="4" height="6" rx="1" fill="#2563EB" opacity="0.7"/>
        <rect x="24" y="18" width="4" height="6" rx="1" fill="#2563EB" opacity="0.7"/>
        <line x1="8" y1="21" x2="32" y2="21" stroke="#93C5FD" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Atención integral para toda la familia, con la última tecnología y
            un equipo comprometido con tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col gap-4"
            >
              <div>{s.icon}</div>
              <h3 className="text-xl font-bold text-slate-800">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
