"use client";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <div
      className="group relative p-8 lg:p-10 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-card border border-accent/5 transition-all duration-500 group-hover:border-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-14 h-14 flex items-center justify-center mb-6 border border-accent/20 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
          <div className="text-accent group-hover:text-accent-light transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-serif font-medium text-foreground mb-3">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-8 h-px bg-accent/30 mb-4 group-hover:w-12 transition-all duration-500" />

        {/* Description */}
        <p className="text-foreground-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
