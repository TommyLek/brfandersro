import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              <span className="text-gold-gradient">Varför BRF Andersro?</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Ett unikt boende som kombinerar modern komfort med Visbys historiska charm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Fantastiskt läge"
              description="Beläget i Visby med närhet till både centrum, havet och Gotlands vackra natur. Perfekt för dig som vill ha allt inom räckhåll."
            />

            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="70 lägenheter"
              description="Ett varierat utbud av lägenheter i olika storlekar, från smarta ettor till rymliga familjeboenden. Något för alla livssituationer."
            />

            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              }
              title="Parkeringsgarage"
              description="Bekväm parkering i eget garage. Slipp bekymmer om parkering och ha bilen säkert förvarad, oavsett väder."
            />

            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Modern design"
              description="Genomtänkta planlösningar med moderna material och hög kvalitet. Energieffektiva lösningar för en hållbar framtid."
            />

            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Byggstart 2027"
              description="Projektet är i planeringsfasen med planerad byggstart 2027. Anmäl ditt intresse nu för att vara med från början."
            />

            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Gemenskap"
              description="Bli en del av en ny bostadsrättsförening med engagerade grannar och gemensamma utrymmen för alla åldrar."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            <span className="text-gold-gradient">Intresserad?</span>
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Anmäl ditt intresse redan idag och bli först med att få information om projektet,
            lägenhetspriser och möjlighet att boka.
          </p>
          <Link href="/intresse" className="btn-primary text-lg">
            Anmäl ditt intresse
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              <span className="text-gold-gradient">Tidplan</span>
            </h2>
            <p className="text-muted">Följ projektets utveckling</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-accent rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Nu - Projektering</h3>
                <p className="text-muted text-sm">Planering och projektering pågår. Intresseanmälningar tas emot.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 border-2 border-accent/50 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground/70">2026 - Försäljningsstart</h3>
                <p className="text-muted text-sm">Detaljerad information om lägenheter och priser presenteras.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 border-2 border-accent/50 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground/70">2027 - Byggstart</h3>
                <p className="text-muted text-sm">Byggstart enligt plan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 border-2 border-accent/50 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground/70">2029 - Inflyttning</h3>
                <p className="text-muted text-sm">Beräknad inflyttning för de första boende.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
