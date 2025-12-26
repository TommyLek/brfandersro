import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lägenheterna | BRF Andersro",
  description: "Upptäck lägenheterna i BRF Andersro - 70 moderna bostäder i olika storlekar i Visby, Gotland.",
};

export default function Lagenheter() {
  const apartmentTypes = [
    {
      type: "1 rum & kök",
      size: "ca 35-45 m²",
      description: "Smarta, välplanerade ettor perfekta för singelhushåll eller som investering.",
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
      description: "Rymliga treor för den lilla familjen eller dig som vill ha extra utrymme.",
      features: ["Balkong/uteplats", "Två sovrum", "Förvaring"],
    },
    {
      type: "4 rum & kök",
      size: "ca 90-110 m²",
      description: "Generösa fyror för familjen som behöver plats att växa.",
      features: ["Stor balkong/uteplats", "Tre sovrum", "Två badrum"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Lägenheterna
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">Hitta ditt nya hem</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            70 lägenheter i varierande storlekar - från smarta ettor till rymliga familjebostäder.
          </p>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartmentTypes.map((apt, index) => (
              <div
                key={index}
                className="bg-primary/50 border border-accent/10 rounded-lg p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    {apt.type}
                  </h3>
                  <span className="text-accent font-medium">{apt.size}</span>
                </div>
                <p className="text-muted mb-6">{apt.description}</p>
                <ul className="space-y-2">
                  {apt.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted text-sm">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">
            <span className="text-gold-gradient">Standard i alla lägenheter</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Parkettgolv</h4>
                <p className="text-muted text-sm">Äkta trägolv i alla rum</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Energieffektivt</h4>
                <p className="text-muted text-sm">Moderna installationer och isolering</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Balkong/uteplats</h4>
                <p className="text-muted text-sm">Privat utomhusutrymme till varje lägenhet</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Kvalitetsvitvaror</h4>
                <p className="text-muted text-sm">Helintegrerade vitvaror i köket</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/50 border border-accent/20 rounded-lg p-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-foreground">
              Planritningar kommer snart
            </h3>
            <p className="text-muted mb-6">
              Detaljerade planritningar och exakta ytor publiceras i samband med försäljningsstart.
              Anmäl ditt intresse för att få information så snart det finns tillgängligt.
            </p>
            <Link href="/intresse" className="btn-primary">
              Anmäl ditt intresse
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
