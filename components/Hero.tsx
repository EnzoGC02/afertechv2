import React from "react";
import {
  ChevronRight,
  Shield,
  Cpu,
  Gauge,
  Zap,
  BarChart3,
  Database,
  Workflow,
} from "lucide-react";

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
              <button className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-4 rounded-sm text-sm font-black transition-all duration-300 shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 uppercase tracking-widest">
                Nuestros Servicios
                <ChevronRight size={16} />
              </button>
              <button className="bg-white hover:bg-slate-50 text-blue-900 border-2 border-blue-900/10 px-10 py-4 rounded-sm text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest">
                Consultoría Técnica
              </button>
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
              <div className="absolute top-6 -left-6 p-4 bg-blue-900 text-white shadow-xl -rotate-2">
                <Shield size={24} className="mb-2" />
                <p className="text-xs font-black uppercase tracking-widest">
                  Garantía de Calidad
                </p>
                <p className="text-[10px] opacity-80">
                  Ingeniería certificada y normativa internacional
                </p>
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

export default Hero;
