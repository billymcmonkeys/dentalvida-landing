"use client";

import { useState } from "react";

const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];
const ALL_TIMES = ["09:00","10:00","11:00","15:00","16:00","17:00","18:00"];
const BUSY_BY_WEEKDAY: Record<number, string[]> = {
  1: ["10:00","15:00"],
  2: ["09:00","17:00"],
  3: ["11:00","16:00"],
  4: ["10:00","18:00"],
  5: ["09:00","15:00"],
};

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function isAvailable(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const dow = d.getDay();
  return d >= today && dow >= 1 && dow <= 5;
}

export default function AppointmentCalendar() {
  const [current, setCurrent] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selected, setSelected] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function prevMonth() {
    setCurrent(new Date(year, month - 1, 1));
    setSelected(null);
    setSelectedTime(null);
  }
  function nextMonth() {
    setCurrent(new Date(year, month + 1, 1));
    setSelected(null);
    setSelectedTime(null);
  }

  function handleDayClick(day: number) {
    const date = new Date(year, month, day);
    if (!isAvailable(date)) return;
    setSelected(date);
    setSelectedTime(null);
  }

  function handleConfirm() {
    setSubmitted(true);
  }

  const busyTimes = selected ? (BUSY_BY_WEEKDAY[selected.getDay()] ?? []) : [];

  return (
    <section id="turnos" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            Reservá tu Turno
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Elegí el día y horario que mejor te quede. El Dr. Morales te contactará
            para confirmar tu turno.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-md mx-auto">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-green-700 mb-2">¡Solicitud enviada!</h3>
            <p className="text-green-600 text-sm">
              El Dr. Morales te contactará para confirmar tu turno el{" "}
              <strong>
                {selected?.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })}
              </strong>{" "}
              a las <strong>{selectedTime}</strong>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setSelected(null); setSelectedTime(null); }}
              className="mt-6 text-blue-600 underline text-sm"
            >
              Hacer otra reserva
            </button>
          </div>
        ) : (
          <div className="bg-white border border-blue-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Calendar */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-blue-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-blue-50 text-slate-600 transition-colors"
                    aria-label="Mes anterior"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <span className="font-bold text-slate-800">
                    {MONTHS[month]} {year}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-blue-50 text-slate-600 transition-colors"
                    aria-label="Mes siguiente"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {WEEKDAYS.map((d) => (
                    <div key={d} className="text-center text-xs font-semibold text-slate-400 py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDow }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const date = new Date(year, month, day);
                    const available = isAvailable(date);
                    const isSelected = selected ? isSameDay(date, selected) : false;
                    return (
                      <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        disabled={!available}
                        className={[
                          "aspect-square flex items-center justify-center text-sm rounded-full transition-colors font-medium",
                          isSelected
                            ? "bg-blue-600 text-white"
                            : available
                            ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                            : "text-slate-300 cursor-not-allowed",
                        ].join(" ")}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-slate-400 mt-4 text-center">
                  Disponible: lunes a viernes
                </p>
              </div>

              {/* Time slots */}
              <div className="p-6 flex flex-col">
                <h3 className="font-bold text-slate-700 mb-4 text-sm">
                  {selected
                    ? `Horarios para el ${selected.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })}`
                    : "Seleccioná un día para ver horarios"}
                </h3>

                {selected ? (
                  <>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      {ALL_TIMES.map((time) => {
                        const busy = busyTimes.includes(time);
                        const sel = selectedTime === time;
                        return (
                          <button
                            key={time}
                            disabled={busy}
                            onClick={() => setSelectedTime(time)}
                            className={[
                              "py-2.5 rounded-xl text-sm font-semibold transition-colors border",
                              busy
                                ? "bg-red-50 text-red-300 border-red-100 cursor-not-allowed line-through"
                                : sel
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
                            ].join(" ")}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-200 inline-block"/> Disponible</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-200 inline-block"/> Ocupado</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block"/> Seleccionado</span>
                    </div>

                    <button
                      disabled={!selectedTime}
                      onClick={handleConfirm}
                      className={[
                        "mt-5 w-full py-3 rounded-xl font-bold text-sm transition-colors",
                        selectedTime
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed",
                      ].join(" ")}
                    >
                      {selectedTime ? `Confirmar turno a las ${selectedTime}` : "Elegí un horario"}
                    </button>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-slate-300">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
