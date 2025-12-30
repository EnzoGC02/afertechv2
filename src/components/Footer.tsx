import React from "react";
import { Mail, Phone, MapPin, Globe, User } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const contactInfo = {
    manager: "Aldo Daniel Fernandez Usair",
    email: "afernandez@afertech.com.ar",
    phone: "2645127025",
    whatsappLink: "https://wa.me/2645127025",
  };

  return (
    <footer className="bg-slate-900 pt-12 md:pt-24 pb-6 md:pb-12" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <Logo className="text-white" width={145} height={100} />
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Ofrecemos soluciones tecnológicas diseñadas con la más alta
              calidad, basándonos en nuestros principios de respeto y
              compromiso.
            </p>
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-400">
                <User size={18} className="text-blue-400" />
                <span className="text-sm font-bold text-white">
                  Gerente: {contactInfo.manager}
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-blue-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-bold hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-blue-400" />
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:text-white transition-colors"
                >
                  Cel: {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
              Proyectos Realizados
            </h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li>
                <span className="text-blue-400">●</span> Sistema de Micronizado
              </li>
              <li>
                <span className="text-blue-400">●</span> Planta de Trituración
              </li>
              <li>
                <span className="text-blue-400">●</span> Planta de Cal (SCADA)
              </li>
              <li>
                <span className="text-blue-400">●</span> Draga Dammen
                (Reparación)
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
              Nuestros Valores
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-sm">
                <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                  Respeto
                </p>
                <p className="text-[9px] text-slate-500">
                  En el trabajo en equipo.
                </p>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-sm">
                <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                  Compromiso
                </p>
                <p className="text-[9px] text-slate-500">Con los objetivos.</p>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-sm col-span-2">
                <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                  Calidad
                </p>
                <p className="text-[9px] text-slate-500">
                  Garantía en cada servicio entregado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} AFERTECH S.A. | Tecnología e Ingeniería
            Aplicada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
