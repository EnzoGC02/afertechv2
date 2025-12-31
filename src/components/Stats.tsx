import React from "react";

const Stats: React.FC = () => {
  const stats = [
    { label: "Plantas Automatizadas", value: "4+" },
    { label: "Tableros Fabricados", value: "15+" },
    { label: "PLC Migrados", value: "20+" },
    { label: "Sistemas SCADA", value: "30+" },
  ];

  return (
    <div className="relative z-20 bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-blue-200 font-bold uppercase tracking-[0.2em] text-xs mb-10 opacity-50 text-center">
          Nuestra Experiencia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-blue-400/30 pl-6">
              <p className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums tracking-tighter">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-blue-200/60 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
