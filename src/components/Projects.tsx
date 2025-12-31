import React, { useEffect, useMemo, useState, useRef } from "react";
import { ExternalLink, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "Puesta en marcha de Generador Caterpillar",
    description:
      "Adecuación, montaje eléctrico, programación y puesta en servicio del modelo CAT C4.4 DITA.",
    technologies: [
      "Caterpillar",
      "Generación",
      "Eléctrica",
      "Puesta en Marcha",
    ],
    features: [
      "Montaje eléctrico",
      "Programación",
      "Test y servicio",
      "Adecuación técnica",
    ],
    image: "/images/proyectos/Puesta_en_marcha.png",
  },
  {
    title: "Sistema Micronizado de Óxido",
    description:
      "Diseño integral de ingeniería eléctrica y control, programación de variadores (Profinet/Profibus) y SCADA.",
    technologies: ["PLC", "SCADA", "Profinet", "Variadores"],
    features: [
      "Ingeniería de control",
      "Programación VDF",
      "Precomisionado",
      "Puesta en marcha",
    ],
    image: "/images/proyectos/micronizado.png",
  },
  {
    title: "Sistema de Trituración de Piedra",
    description:
      "Precomisionado de señales, programación de variadores de frecuencia, PLC y sistema SCADA.",
    technologies: ["PLC", "SCADA", "Variadores", "Automatización"],
    features: [
      "Precomisionado",
      "Programación PLC/VDF",
      "Sistema SCADA",
      "Puesta en marcha",
    ],
    image: "/images/proyectos/triturado.png",
  },
  {
    title: "Clasificación y Molienda",
    description:
      "Diseño de sistema SCADA e ingeniería de control, con programación de PLC y variadores de frecuencia.",
    technologies: ["SCADA", "Ingeniería Control", "PLC", "Molienda"],
    features: [
      "Diseño SCADA",
      "Programación VDF",
      "Precomisionamiento",
      "Puesta en marcha",
    ],
    image: "/images/proyectos/molienda.png",
  },
  {
    title: "Tableros de Potencia y Distribución",
    description:
      "Diseño y fabricación integral de tableros de distribución y autosoportados con pruebas FAT.",
    technologies: ["Tableros", "Potencia", "Pruebas FAT", "Diseño Eléctrico"],
    features: [
      "Distribución y Comando",
      "Pruebas FAT",
      "Montaje y Cableado",
      "Ingeniería de detalle",
    ],
    image: "/images/proyectos/tablero.png",
  },
  {
    title: "Migración PLC - Trituración Primaria",
    description:
      "Actualización tecnológica, adecuación de tableros, programación de PLC y diseño de planos eléctricos.",
    technologies: [
      "Migración PLC",
      "SCADA",
      "Planos Eléctricos",
      "Instrumentación",
    ],
    features: [
      "Adecuación tableros",
      "Programación PLC",
      "Diseño SCADA",
      "Puesta en marcha",
    ],
    image: "/images/proyectos/migracion_trituracion.png",
  },
  {
    title: "Automatización Planta de Mezclas",
    description:
      "Diseño de tableros, montaje de válvulas, SCADA, PLC e integración con software de producción.",
    technologies: ["Automatización", "Neumática", "SCADA", "Integración ERP"],
    features: [
      "Tableros Control/Potencia",
      "Válvulas Neumáticas",
      "Software Producción",
      "Ingeniería Eléctrica",
    ],
    image: "/images/proyectos/automatizacion_mezclas.png",
  },
  {
    title: "Migración PLC y SCADA Planta de Cal",
    description:
      "Migración de PLC Siemens S7-300, diseño de diagrama de flujo de procesos y adecuación de equipos.",
    technologies: ["Siemens S7-300", "Migración", "SCADA", "Procesos"],
    features: [
      "Diagrama de Flujo",
      "Migración PLC",
      "Adecuación Equipos",
      "Puesta en marcha",
    ],
    image: "/images/proyectos/planta_cal.png",
  },
  {
    title: "Mantenimiento Draga Dammen",
    description:
      "Cableado de potencia/control, configuración Profinet y reacondicionamiento de motores diésel Perkin.",
    technologies: ["Naval", "Profinet", "Motores Perkin", "Harting Han"],
    features: [
      "Cableado Potencia",
      "Red Profinet",
      "Motores Diésel",
      "Adecuación Medidores",
    ],
    image: "/images/proyectos/draga_dammen.png",
  },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);
  const project = useMemo(() => PROJECTS[active], [active]);
  const scrollContainerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Sincronizar scroll con selección activa en mobile (Scroll Spy)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Solo aplicar lógica en mobile (< 1024px) donde el layout es horizontal
        if (window.innerWidth >= 1024) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActive(index);
          }
        });
      },
      { root: container, threshold: 0.6 } // Se activa cuando la tarjeta es 60% visible
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Solo activar si la sección es visible o el usuario está interactuando,
      // pero para simplificar lo dejamos global como en el original
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (i + 1) % PROJECTS.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="proyectos" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado (Estilo consistente con Features.tsx) */}
        <SectionHeader
          badge="Casos de Éxito"
          badgeIcon={<Activity size={14} className="text-blue-700" />}
          title={
            <>
              Proyectos <span className="text-blue-700">Realizados</span>
            </>
          }
          description="Impulsamos su rentabilidad mediante la integración total de datos. Garantizamos la continuidad operativa y una convergencia fluida entre su planta y los niveles estratégicos (ERP/MES) para una toma de decisiones basada en información real"
        />

        {/* Grid Principal */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* COLUMNA IZQUIERDA: PREVIEW (Imagen + Panel Flotante) */}
          <article className="relative rounded-2xl border border-slate-200 shadow-2xl shadow-blue-900/10 overflow-hidden bg-slate-900 group aspect-[16/12] lg:aspect-[16/10] transition-all duration-500">
            {/* Imagen */}
            <div className="absolute inset-0">
              <img
                key={project.image} // Key fuerza re-render para animación simple
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
            </div>

            {/* Panel "Runs" Flotante (Estilo Dashboard) */}
            <div className="absolute left-2 right-2 bottom-2 md:left-6 md:right-6 md:bottom-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden">
              {/* Header del Panel */}
              <div className="flex items-center justify-between px-3 py-1.5 md:px-4 md:py-3 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/70">
                    Estado: Operativo
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/20" />
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/20" />
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Lista de Features */}
              <ul className="p-2 md:p-4 grid grid-cols-2 gap-2 md:gap-3">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs md:text-sm text-white/90 font-medium"
                  >
                    <CheckCircle2 className="size-3 md:size-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Footer del Panel con CTA */}
              <div className="px-3 py-1.5 md:px-4 md:py-3 border-t border-white/10 bg-white/5 flex justify-end">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors"
                >
                  Ver Detalles Técnicos <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </article>

          {/* COLUMNA DERECHA: SELECTOR (Lista de Items) */}
          <aside
            ref={scrollContainerRef}
            className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden snap-x snap-mandatory lg:snap-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-4 lg:pb-0 lg:max-h-[600px] lg:pr-2 [scrollbar-width:none] lg:[scrollbar-width:thin] max-lg:[&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:w-1.5 lg:[&::-webkit-scrollbar-track]:bg-transparent lg:[&::-webkit-scrollbar-thumb]:bg-slate-200 lg:[&::-webkit-scrollbar-thumb]:rounded-full hover:lg:[&::-webkit-scrollbar-thumb]:bg-slate-300"
            role="tablist"
          >
            {PROJECTS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`
                    group relative text-left p-5 rounded-xl border transition-all duration-500 ease-out
                    shrink-0 w-[85vw] sm:w-[350px] lg:w-full snap-center
                    ${
                      isActive
                        ? "bg-blue-50 border-blue-200 shadow-md lg:translate-x-2"
                        : "bg-white border-slate-200 shadow-sm hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-lg lg:hover:translate-x-1"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Bullet Indicator */}
                    <div
                      className={`
                      mt-1 w-3 h-3 rounded-full border shrink-0 transition-colors duration-300
                      ${
                        isActive
                          ? "bg-blue-700 border-blue-700"
                          : "bg-transparent border-slate-300 group-hover:border-blue-400"
                      }
                    `}
                    />

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`
                        text-base md:text-lg font-bold mb-1 transition-colors
                        ${
                          isActive
                            ? "text-blue-900"
                            : "text-slate-700 group-hover:text-slate-900"
                        }
                      `}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                        {p.description}
                      </p>

                      {/* Tags de Tecnologías */}
                      <div className="flex flex-wrap gap-2">
                        {p.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className={`
                              text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border
                              ${
                                isActive
                                  ? "bg-white border-blue-200 text-blue-700"
                                  : "bg-slate-100 border-slate-200 text-slate-500 group-hover:bg-white"
                              }
                            `}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowRight
                      className={`
                        size-5 shrink-0 transition-all duration-500 ease-out
                        ${
                          isActive
                            ? "text-blue-700 translate-x-0"
                            : "text-slate-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }
                      `}
                    />
                  </div>
                </button>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
