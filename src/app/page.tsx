import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Fantastiskt läge",
      description: "Promenera till innerstadens kaféer och restauranger eller njut av Gotlands natur bara minuter bort. Perfekt för dig som vill ha allt inom räckhåll.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "70 lägenheter",
      description: "Från eleganta ettor till rymliga familjeboenden — ljusa rum med generösa fönster och genomtänkt design i varje detalj.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: "Parkeringsgarage",
      description: "Underjordiskt garage med laddstationer för elbilar, cykelförråd och direktaccess till trappuppgången via hiss.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Modern design",
      description: "Genomtänkta planlösningar med moderna material och hög kvalitet. Energieffektiva lösningar.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Planerad byggstart 2027",
      description: "Projektet är i planeringsfasen med planerad byggstart 2027. Anmäl ditt intresse nu.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Gemenskap",
      description: "Bli en del av en ny bostadsrättsförening med engagerade grannar och gemensamma utrymmen.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Visby, Gotland"
        title="BRF Andersro"
        description="Upptäck ditt nya hem i hjärtat av Visby. 70 moderna lägenheter med genomtänkt design, parkeringsgarage och närhet till allt som gör Gotland unikt."
        ctaText="Anmäl ditt intresse"
        ctaHref="/intresse"
        showSecondaryButton={true}
        secondaryText="Läs mer om projektet"
        secondaryHref="/om-projektet"
      />

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute inset-0 bg-pattern" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium animate-fade-in-up">
              Fördelar
            </p>
            <h2 className="font-serif font-normal mb-6 animate-fade-in-up delay-100">
              <span className="text-gold-gradient">Varför BRF Andersro?</span>
            </h2>
            <div className="flex justify-center mb-6 animate-fade-in-up delay-200">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
            <p className="text-foreground-muted max-w-2xl mx-auto text-lg animate-fade-in-up delay-300">
              Ett unikt boende som kombinerar modern komfort med Visbys historiska charm.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-accent/5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "70", label: "Lägenheter" },
              { number: "2027", label: "Planerad byggstart" },
              { number: "2029", label: "Planerad inflyttning" },
              { number: "P", label: "Garage" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="stat-number mb-2">{stat.number}</p>
                <p className="text-foreground-muted text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201, 169, 98, 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <span className="w-2 h-2 rotate-45 border border-accent/50" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <h2 className="font-serif font-normal mb-6">
            <span className="text-gold-gradient">Intresserad?</span>
          </h2>

          <p className="text-foreground-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Anmäl ditt intresse redan idag och bli först med att få information om projektet,
            lägenhetspriser och möjlighet att boka.
          </p>

          <Link href="/intresse" className="btn-primary group">
            <span>Anmäl ditt intresse</span>
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
        </div>
      </section>

      {/* Location teaser */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Platsen
              </p>
              <h2 className="font-serif font-normal mb-6">
                <span className="text-gold-gradient">Visby, Gotland</span>
              </h2>
              <div className="w-16 h-px bg-accent/30 mb-8" />
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                Att bo i Visby är att ha det bästa inom räckhåll. Innerstaden med sina kaféer, butiker och lokala marknader. Gotlands kust och vandringsleder för den som söker lugn och natur. Och ett kulturliv som lever året runt.
              </p>
              <ul className="space-y-4 mb-8 elegant-list">
                <li className="text-foreground-muted">Charmiga butiker, restauranger och marknader</li>
                <li className="text-foreground-muted">Vackra kuststräckor och vandringsleder</li>
                <li className="text-foreground-muted">Rikt kulturutbud genom alla årstider</li>
              </ul>
              <Link href="/om-projektet" className="btn-ghost">
                Läs mer om läget
              </Link>
            </div>

            {/* Map */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute inset-0 border border-accent/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=57.632306,18.293069&t=k&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BRF Andersro - Läge i Visby"
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
              {/* Coordinates overlay */}
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 border border-accent/20">
                <p className="text-foreground-muted font-mono text-xs">57.6323°N, 18.2931°E</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
