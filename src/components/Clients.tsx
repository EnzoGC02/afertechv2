import React from "react";
import { Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Placeholder de logos. Reemplaza las URLs con tus imágenes locales (ej: "/images/clientes/logo1.png")
const CLIENTS = [
  {
    name: "Caleras San Juan",
    logo: "/images/clientes/caleras-logo.png",
  },
  {
    name: "Calidra",
    logo: "/images/clientes/calidra-logo.png",
  },
  {
    name: "CBB",
    logo: "/images/clientes/cbb-logo.png",
  },
  {
    name: "Cefas",
    logo: "/images/clientes/cefas-logo.png",
  },
  {
    name: "Durlock",
    logo: "/images/clientes/durlock-logo.png",
  },
  {
    name: "Raffo",
    logo: "/images/clientes/raffo-logo.png",
  },
  {
    name: "Sibelco",
    logo: "/images/clientes/sibelco-logo.png",
  },
  {
    name: "Taranto",
    logo: "/images/clientes/taranto-logo.png",
  },
];

const Clients: React.FC = () => {
  return (
    <section className="relative z-20 py-16 pb-24 bg-slate-50 rounded-b-[40px] lg:rounded-b-[60px] shadow-xl mb-[-60px] border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Trayectoria y Confianza"
          badgeIcon={<Building2 size={14} className="text-blue-700" />}
          title={
            <>
              Empresas que confían en{" "}
              <span className="text-blue-700">Afertech</span>
            </>
          }
          description="Desde grandes plantas productivas hasta proyectos de infraestructura crítica. Ellos eligen nuestra ingeniería para garantizar su continuidad operativa."
        />
      </div>

      <div className="relative w-full">
        {/* Degradados laterales para suavizar la entrada/salida de los logos */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Contenedor del Slider */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {/* Renderizamos la lista dos veces para lograr el efecto de loop infinito sin cortes */}
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div
              key={index}
              className="mx-8 md:mx-14 w-32 md:w-48 h-20 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  h-10 md:h-12 w-auto max-w-full object-contain select-none
                  grayscale opacity-60 mix-blend-multiply
                  hover:grayscale-0 hover:opacity-100 hover:scale-110 
                  transition-all duration-300 cursor-pointer
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Definición de la animación (Keyframes) */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
