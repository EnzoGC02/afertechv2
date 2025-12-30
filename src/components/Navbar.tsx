import React from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Empresa", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo className="text-black" width={145} height={100} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-800 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-2.5 rounded-sm text-[11px] font-black transition-all duration-300 flex items-center gap-2 uppercase tracking-[0.15em]"
              href="#contacto"
            >
              Presupuestos
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-black uppercase tracking-widest text-slate-800 hover:text-blue-800"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-blue-900 text-white px-5 py-3 rounded-sm text-center font-black uppercase tracking-widest text-xs">
            Solicitar Presupuesto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
