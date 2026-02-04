import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | BRF Andersro",
  description:
    "Kontakta oss för frågor om BRF Andersro i Visby. Vi hjälper dig gärna med information om projektet.",
};

export default function Kontakt() {
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
            Kontakt
          </p>
          <h1 className="font-serif font-normal mb-8 animate-fade-in-up delay-200">
            <span className="text-gold-gradient">Hör av dig</span>
          </h1>
          <div className="flex justify-center mb-8 animate-fade-in-up delay-300">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Har du frågor om BRF Andersro? Vi hjälper dig gärna.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Lead */}
            <div className="relative p-8 lg:p-10 border border-accent/10 bg-background-card">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-px bg-accent/50" />
              <div className="absolute top-0 left-0 w-px h-12 bg-accent/50" />

              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Projektansvarig
              </p>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">
                Tommy Leksäther
              </h3>
              <div className="w-12 h-px bg-accent/30 mb-6" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/20 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone text-xs uppercase tracking-wider mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+46708833601"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      070-883 36 01
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/20 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone text-xs uppercase tracking-wider mb-1">
                      E-post
                    </p>
                    <a
                      href="mailto:tommy.leksather@jabs.se"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      tommy.leksather@jabs.se
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="relative p-8 lg:p-10 border border-accent/10 bg-background-card">
              {/* Corner accents */}
              <div className="absolute bottom-0 right-0 w-12 h-px bg-accent/50" />
              <div className="absolute bottom-0 right-0 w-px h-12 bg-accent/50" />

              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Allmänna frågor
              </p>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">
                Intresseanmälan
              </h3>
              <div className="w-12 h-px bg-accent/30 mb-6" />

              <p className="text-foreground-muted mb-8">
                För allmänna frågor om projektet, vänligen använd intresseanmälan
                så återkommer vi till dig.
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
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              Platsen
            </p>
            <h2 className="font-serif font-normal">
              <span className="text-gold-gradient">Läge</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
          </div>

          {/* Map */}
          <div className="relative border border-accent/20 overflow-hidden mb-12">
            <iframe
              src="https://www.google.com/maps?q=57.632306,18.293069&t=k&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BRF Andersro - Läge"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-serif font-medium text-foreground mb-3">
              Visby, Gotland
            </h3>
            <p className="text-foreground-muted mb-4">
              BRF Andersro ligger i Visby på Gotland. Exakt adress meddelas vid
              försäljningsstart.
            </p>
            <div className="flex items-center justify-center gap-4 text-stone text-sm">
              <span className="font-mono">57.6323°N</span>
              <span className="w-px h-4 bg-accent/30" />
              <span className="font-mono">18.2931°E</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
