"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  backgroundImage?: string;
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
  backgroundImage,
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`relative ${
        fullHeight ? "min-h-screen" : "min-h-[70vh]"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Multi-layered background */}
      <div className="absolute inset-0">
        {/* Background image */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </>
        )}

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-background/90 to-background" />

        {/* Radial glow top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.12) 0%, transparent 60%)",
          }}
        />

        {/* Subtle side glows */}
        <div
          className="absolute top-1/4 right-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 100% 50%, rgba(201, 169, 98, 0.06) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 0% 50%, rgba(201, 169, 98, 0.04) 0%, transparent 50%)",
          }}
        />

        {/* Animated floating particles - fixed positions to avoid hydration mismatch */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { left: 10, top: 20, duration: 8, delay: 0 },
            { left: 85, top: 15, duration: 12, delay: 1 },
            { left: 25, top: 70, duration: 10, delay: 2 },
            { left: 70, top: 45, duration: 9, delay: 0.5 },
            { left: 45, top: 80, duration: 11, delay: 1.5 },
            { left: 90, top: 60, duration: 7, delay: 3 },
            { left: 15, top: 40, duration: 13, delay: 2.5 },
            { left: 55, top: 25, duration: 8, delay: 4 },
            { left: 35, top: 90, duration: 10, delay: 1 },
            { left: 80, top: 75, duration: 14, delay: 0 },
            { left: 5, top: 55, duration: 9, delay: 3.5 },
            { left: 60, top: 10, duration: 11, delay: 2 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/20 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, var(--background) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center pt-24">
        {/* Decorative element above subtitle */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
          <span className="w-2 h-2 rotate-45 bg-accent" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`text-accent text-xs sm:text-sm uppercase tracking-[0.4em] mb-6 font-medium transition-all duration-1000 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1
          className={`font-serif font-normal mb-8 leading-[0.95] transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-gradient-animated">{title}</span>
        </h1>

        {/* Decorative line under title */}
        <div
          className={`flex justify-center mb-10 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Description */}
        {description && (
          <p
            className={`text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>
        )}

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href={ctaHref} className="btn-primary group">
            <span>{ctaText}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          {showSecondaryButton && (
            <Link href={secondaryHref} className="btn-secondary">
              <span>{secondaryText}</span>
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {fullHeight && (
        <div
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone">
            Scrolla
          </span>
          <div className="relative w-6 h-10 border border-accent/30 rounded-full">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-accent rounded-full animate-float" />
          </div>
        </div>
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-32 left-8 lg:left-16 hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
      <div className="absolute top-32 right-8 lg:right-16 hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
    </section>
  );
}
