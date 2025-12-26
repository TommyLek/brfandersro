import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  showSecondaryButton?: boolean;
  secondaryText?: string;
  secondaryHref?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Anmäl ditt intresse",
  ctaHref = "/intresse",
  showSecondaryButton = false,
  secondaryText = "Läs mer",
  secondaryHref = "/om-projektet",
  fullHeight = true,
}: HeroProps) {
  return (
    <section
      className={`relative ${fullHeight ? "min-h-screen" : "min-h-[60vh]"} flex items-center justify-center bg-gradient-to-b from-primary via-background to-background`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {subtitle && (
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          <span className="text-gold-gradient">{title}</span>
        </h1>

        {description && (
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaHref} className="btn-primary text-base">
            {ctaText}
          </Link>
          {showSecondaryButton && (
            <Link href={secondaryHref} className="btn-secondary text-base">
              {secondaryText}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {fullHeight && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      )}
    </section>
  );
}
