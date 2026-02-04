import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lägenheterna | BRF Andersro",
  description:
    "Upptäck lägenheterna i BRF Andersro - 70 moderna bostäder i olika storlekar i Visby, Gotland.",
};

export default function Lagenheter() {
  const apartmentTypes = [
    {
      type: "1 rum & kök",
      size: "ca 35-45 m²",
      description:
        "Smarta, välplanerade ettor perfekta för singelhushåll eller som investering.",
      features: ["Balkong/uteplats", "Öppen planlösning", "Modernt kök"],
    },
    {
      type: "2 rum & kök",
      size: "ca 50-65 m²",
      description: "Luftiga tvåor med plats för både vardag och gäster.",
      features: ["Balkong/uteplats", "Separat sovrum", "Generöst badrum"],
    },
    {
      type: "3 rum & kök",
      size: "ca 70-85 m²",
      description:
        "Rymliga treor för den lilla familjen eller dig som vill ha extra utrymme.",
      features: ["Balkong/uteplats", "Två sovrum", "Förvaring"],
    },
    {
      type: "4 rum & kök",
      size: "ca 90-110 m²",
      description: "Generösa fyror för familjen som behöver plats att växa.",
      features: ["Stor balkong/uteplats", "Tre sovrum", "Två badrum"],
    },
  ];

  const standards = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Parkettgolv",
      description: "Äkta trägolv i alla rum",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Energieffektivt",
      description: "Moderna installationer och isolering",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      title: "Balkong/uteplats",
      description: "Privat utomhusutrymme till varje lägenhet",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Kvalitetsvitvaror",
      description: "Helintegrerade vitvaror i köket",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-background to-background" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="w-2 h-2 rotate-45 bg-accent" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>

          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 font-medium animate-fade-in-up delay-100">
            Bostäder
          </p>
          <h1 className="font-serif font-normal mb-8 animate-fade-in-up delay-200">
            <span className="text-gold-gradient">Hitta ditt nya hem</span>
          </h1>
          <div className="flex justify-center mb-8 animate-fade-in-up delay-300">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            70 lägenheter i varierande storlekar - från smarta ettor till
            rymliga familjebostäder.
          </p>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-accent/5">
            {apartmentTypes.map((apt, index) => (
              <div
                key={index}
                className="group relative p-8 lg:p-10 animate-fade-in-up bg-background-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-medium text-foreground">
                      {apt.type}
                    </h3>
                    <span className="text-accent font-medium text-sm">
                      {apt.size}
                    </span>
                  </div>
                  <div className="w-8 h-px bg-accent/30 mb-4" />
                  <p className="text-foreground-muted mb-6">{apt.description}</p>
                  <ul className="space-y-3">
                    {apt.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground-muted text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              Kvalitet
            </p>
            <h2 className="font-serif font-normal">
              <span className="text-gold-gradient">
                Standard i alla lägenheter
              </span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {standards.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-accent/20 flex-shrink-0">
                  <div className="text-accent">{item.icon}</div>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">
                    {item.title}
                  </h4>
                  <p className="text-foreground-muted text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <div className="relative p-12 border border-accent/10 bg-background-card">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-px bg-accent/50" />
            <div className="absolute top-0 left-0 w-px h-12 bg-accent/50" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-accent/50" />
            <div className="absolute bottom-0 right-0 w-px h-12 bg-accent/50" />

            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              Kommer snart
            </p>
            <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">
              Planritningar
            </h3>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-accent/30" />
            </div>
            <p className="text-foreground-muted mb-8">
              Detaljerade planritningar och exakta ytor publiceras i samband med
              försäljningsstart. Anmäl ditt intresse för att få information så
              snart det finns tillgängligt.
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
        </div>
      </section>
    </>
  );
}
