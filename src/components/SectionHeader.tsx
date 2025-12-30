import React from "react";

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignmentClass} mb-12 md:mb-16 ${className}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${
          isDark
            ? "bg-slate-900 border-slate-800"
            : "bg-blue-50 border-blue-200"
        }`}
      >
        {badgeIcon}
        <span
          className={`text-[10px] font-black uppercase tracking-[0.2em] ${
            isDark ? "text-slate-400" : "text-blue-700"
          }`}
        >
          {badge}
        </span>
      </div>

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-[1.1] ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-lg font-medium leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
