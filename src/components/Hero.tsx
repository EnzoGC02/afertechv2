import React from "react";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white"
      id="inicio"
    >
      {/* Background: Industrial cabling/server context */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/hmi_simatic_2.png"
          alt="Ingeniería de Control y Datos"
          className="w-full h-full object-cover grayscale-[0.6] opacity-40 2xl:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.05] industrial-grid"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-blue-900/5 border-l-4 border-blue-800">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-900">
                Ingeniería · Tecnología · Innovación
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
              Ingeniería <br />
              <span className="text-blue-800">Integral</span> <br />
              <span className="text-slate-500">y Evolución Industrial.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              Transformamos la complejidad técnica en eficiencia operativa.
              Especialistas en arquitecturas de control, software industrial e
              infraestructura eléctrica de alto desempeño para la continuidad de
              su negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#servicios"
                className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-4 rounded-sm text-sm font-black transition-all duration-300 shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 uppercase tracking-widest"
              >
                Nuestros Servicios
                <ChevronRight size={16} />
              </a>
              <a
                href="#contacto"
                className="bg-white hover:bg-slate-50 text-blue-900 border-2 border-blue-900/10 px-10 py-4 rounded-sm text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                Consultoría Técnica
              </a>
            </div>

            {/* Bottom Grid: Refined Keywords */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-blue-800/50">
                  Control
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Sistemas Inteligentes
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-blue-800/50">
                  Energía
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Infraestructura Crítica
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-blue-800/50">
                  Datos
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Software & Analítica
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-blue-800/50">
                  Soporte
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Continuidad Operativa
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-2 bg-white shadow-2xl border border-slate-100 rotate-2">
              <img
                src="/images/hero/selected.jpeg"
                alt="Proyectos de Ingeniería Industrial"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-6 -left-6 md:top-10 md:-left-10 bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-lg border border-white/10 shadow-2xl shadow-blue-900/30 -rotate-2 hover:rotate-0 transition-all duration-300 group">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-0.5">
                    Certificado
                  </p>
                  <p className="text-sm font-bold text-white leading-tight">
                    Garantía de Calidad
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-full h-full border-[20px] border-slate-50 -z-10 overflow-hidden pointer-events-none">
              <img
                src="/images/hero/plano.png"
                alt="Plano Eléctrico de Ingeniería"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualitySeal = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14.8 4.2L18.4 4.2L19.4 7.7L22.5 9.3L21.9 12.9L23.6 16L20.8 18.2L19.8 21.7L16.2 21.1L13.4 23.3L10.6 21.1L7 21.7L6 18.2L3.2 16L4.9 12.9L4.3 9.3L7.4 7.7L8.4 4.2L12 4.2L14.8 2Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hero;
