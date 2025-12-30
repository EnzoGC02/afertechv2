import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import SectionHeader from "./SectionHeader";
const URL_API = "http://localhost/api/contact.php?debug=1";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        const text = await response.text();
        alert(`Error: ${text}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative pt-16 pb-10">
      {/* FONDO PRINCIPAL CON CURVATURA SUPERIOR */}
      <div className="absolute inset-0 bg-slate-950 border-t border-slate-800 overflow-hidden">
        {/* Luces ambientales (Glows) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* Patrón de ruido sutil para textura */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* COLUMNA IZQUIERDA: TEXTO E INFO */}
          <div className="space-y-8">
            <div>
              <SectionHeader
                align="left"
                theme="dark"
                badge="Contacto"
                badgeIcon={
                  <MessageSquare size={14} className="text-slate-400" />
                }
                title={
                  <>
                    Hablemos de tu <br />
                    <span className="text-blue-500">Siguiente Nivel</span>
                  </>
                }
                description="¿Tienes un desafío industrial? Nuestros ingenieros están listos para diseñar la solución de automatización que necesitas."
              />
            </div>

            <div className="space-y-4 pt-4">
              <ContactItem
                icon={<Mail className="size-5" />}
                title="Correo Electrónico"
                value="afernandez@afertech.com.ar"
                href="mailto:afernandez@afertech.com.ar"
              />
              <ContactItem
                icon={<Phone className="size-5" />}
                title="WhatsApp"
                value="2645127025 (09:00 a 18:00)"
                target="_blank"
                href="https://wa.me/2645127025"
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                title="Oficina Técnica"
                value="Chimbas, San Juan, Argentina"
                target="_blank"
                href="https://www.google.com/maps/place/Afertech/@-31.5084713,-68.5810228,15z/data=!4m14!1m7!3m6!1s0x968141001eed3f25:0xbc5bfebf9d577d7c!2sAfertech!8m2!3d-31.5100565!4d-68.5927245!16s%2Fg%2F11ly_9rs6l!3m5!1s0x968141001eed3f25:0xbc5bfebf9d577d7c!8m2!3d-31.5100565!4d-68.5927245!16s%2Fg%2F11ly_9rs6l?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl relative">
            <form className="relative space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <InputGroup
                  label="Nombre"
                  placeholder="Tu nombre"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputGroup
                  label="Apellido"
                  placeholder="Tu apellido"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <InputGroup
                label="Email"
                placeholder="nombre@empresa.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputGroup
                label="Empresa"
                placeholder="Nombre de tu empresa"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Cuéntanos brevemente sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group/btn transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                {!isSubmitting && (
                  <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Integrado */}
        <div className="mt-24 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Afertech. Ingeniería y Automatización.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Desarrollado por:{" "}
            <span className="text-slate-500 hover:text-blue-400 transition-colors cursor-pointer">
              Tu Nombre/Agencia
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

// Componentes Auxiliares para limpieza del código

const ContactItem = ({
  icon,
  title,
  value,
  href,
  target,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  target?: string;
}) => (
  <a
    href={href}
    target={target}
    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all group"
  >
    <div className="size-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-500 group-hover:text-blue-400 group-hover:scale-110 transition-all shadow-inner shadow-black/50 border border-slate-800">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
        {title}
      </p>
      <p className="text-slate-300 font-medium group-hover:text-white transition-colors">
        {value}
      </p>
    </div>
  </a>
);

const InputGroup = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
