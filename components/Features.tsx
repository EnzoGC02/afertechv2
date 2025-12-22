import React from "react";
import { ArrowRight } from "lucide-react";

const Features: React.FC = () => {
  const services = [
    {
      title: "Ingeniería de Procesos y Detalle",
      desc: "Transformamos conceptos en soluciones ejecutables mediante una ingeniería de detalle técnica y precisa. Nos especializamos en la selección estratégica de componentes y el ajuste fino de sistemas de producción para maximizar la eficiencia y facilitar la implementación en planta.",
      image: "/images/servicios/plano_ingenieria.png",
      tag: "DISEÑO",
    },
    {
      title: "Desarrollo de Software Industrial",
      desc: "Creamos soluciones robustas y escalables para la automatización y el control de procesos. Optimizamos su operación mediante sistemas personalizados y una gestión inteligente de datos en tiempo real.",
      image: "/images/servicios/process_engineer.png",
      tag: "TI INDUSTRIAL",
    },
    {
      title: "Automatización y Control de Procesos",
      desc: "Implementamos arquitecturas de control inteligente para la optimización de la productividad. Desde la programación de controladores avanzados hasta la integración de redes industriales, diseñamos sistemas que garantizan la visibilidad total de su operación y una respuesta ágil ante fallos.",
      image: "/images/backgrounds/hmi_simatic_2.png",
      tag: "CONTROL",
    },
    {
      title: "Ingeniería en Tableros de Potencia",
      desc: "Soluciones integrales en distribución, comando y control. Garantizamos la máxima fiabilidad operativa mediante rigurosas pruebas de aceptación en fábrica (FAT) y modelado avanzado para asegurar el cumplimiento de los estándares de seguridad más exigentes",
      image: "/images/servicios/tablero.png",
      tag: "ELÉCTRICA",
    },
    {
      title: "Mantenimiento Especializado y Puesta en Marcha",
      desc: "Soluciones de ingeniería en sitio para la optimización de equipos de potencia y maquinaria industrial. Expertos en la gestión del ciclo de vida de grupos electrógenos de gran capacidad y sistemas de dragado, brindando asistencia técnica avanzada y reparaciones de alta complejidad.",
      image: "/images/servicios/trabajador.png",
      tag: "MONTAJE",
    },
    {
      title: "Capacitación Especializada",
      desc: "Potenciamos el talento de su organización mediante programas de formación técnica avanzada. Transformamos las capacidades de su personal operativo y administrativo, asegurando un dominio experto de las nuevas tecnologías y mejores prácticas de la industria.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      tag: "CAPACITACIÓN",
    },
  ];

  return (
    <section className="relative z-30 mt-[-50px] rounded-t-[40px] lg:rounded-t-[60px] py-32 bg-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">
              Nuestra Misión: Su Evolución Industrial
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Fortalecemos su empresa mediante la{" "}
            <span className="text-blue-800 relative inline-block">
              optimización
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{" "}
            inteligente.
          </h2>

          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Transformamos los desafíos técnicos en oportunidades de crecimiento
            sostenible, combinando experiencia técnica multidisciplinaria con
            soluciones de vanguardia que definen el estándar de la industria
            moderna.
          </p>
        </div>

        {/* Grid Section */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden mb-8 break-inside-avoid"
            >
              {/* Full Background Image (Revealed on Hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header Image (Visible initially) */}
                <div className="h-56 w-full overflow-hidden relative group-hover:opacity-0 transition-opacity duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="flex-1 p-6 bg-white group-hover:bg-transparent transition-colors duration-300 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-white/10 group-hover:text-white transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 group-hover:text-blue-100/90 transition-colors duration-300">
                    {service.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 group-hover:border-white/10 transition-colors">
                    <span className="text-slate-200 font-black text-4xl group-hover:text-white/20 transition-colors select-none">
                      0{index + 1}
                    </span>
                    <a
                      href="#contacto"
                      className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors"
                    >
                      Consultar <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
