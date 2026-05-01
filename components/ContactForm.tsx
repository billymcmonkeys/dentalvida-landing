"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            Contactanos
          </h2>
          <p className="text-slate-500 text-lg">
            Dejanos tu consulta y te respondemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {success ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-green-700 mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-600">Gracias por contactarnos. Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ej: María González"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Ej: 11 5678-9012"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Ej: maria@email.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Contanos en qué podemos ayudarte..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm mt-1"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 text-slate-600">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-4">Información de contacto</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <span>Av. Corrientes 1842, Buenos Aires, Argentina</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📞</span>
                  <span>(011) 4567-8901</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✉️</span>
                  <span>contacto@dentavida.com.ar</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Horarios de atención</h4>
              <ul className="text-sm flex flex-col gap-2 text-slate-600">
                <li className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-semibold">9:00 – 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">9:00 – 13:00</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-1">Dr. Alejandro Morales</p>
              <p className="text-blue-200 text-sm">MN 32.541 — Odontólogo General</p>
              <p className="text-blue-100 text-sm mt-3">
                Más de 15 años de experiencia en ortodoncia y estética dental.
                Certificado en tratamientos Invisalign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
