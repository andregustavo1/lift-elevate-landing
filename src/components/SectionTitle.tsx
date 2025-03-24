
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12 ${className}`}>
      <h2 
        className={`appear animate-fade-in section-title ${
          light ? "text-white" : "text-neutral-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`appear animate-fade-in animation-delay-100 mt-4 text-lg md:text-xl ${
            light ? "text-neutral-100/80" : "text-neutral-800/80"
          } ${centered ? "mx-auto" : ""} max-w-2xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
