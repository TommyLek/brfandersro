import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | BRF Andersro",
  description: "Kontakta oss för frågor om BRF Andersro i Visby. Vi hjälper dig gärna med information om projektet.",
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Kontakt
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">Hör av dig</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Har du frågor om BRF Andersro? Vi hjälper dig gärna.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-primary/50 border border-accent/10 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-foreground">
                Projektansvarig
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted text-sm">Namn</p>
                    <p className="text-foreground">Tommy Leksäther</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted text-sm">Telefon</p>
                    <a href="tel:+46708833601" className="text-foreground hover:text-accent transition-colors">
                      070-883 36 01
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted text-sm">E-post</p>
                    <a href="mailto:tommy.leksather@jabs.se" className="text-foreground hover:text-accent transition-colors">
                      tommy.leksather@jabs.se
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* General Info */}
          <div className="mt-12 bg-primary/30 border border-accent/10 rounded-lg p-8 text-center">
            <h3 className="text-xl font-serif font-bold mb-4 text-foreground">
              Allmänna frågor
            </h3>
            <p className="text-muted mb-6">
              För allmänna frågor om projektet, vänligen använd intresseanmälan så återkommer vi till dig.
            </p>
            <Link href="/intresse" className="btn-primary">
              Anmäl ditt intresse
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">
            <span className="text-gold-gradient">Läge</span>
          </h2>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden border border-accent/20 mb-8">
            <iframe
              src="https://www.google.com/maps?q=57.632306,18.293069&t=k&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BRF Andersro - Läge"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Visby, Gotland</h3>
            <p className="text-muted">
              BRF Andersro ligger i Visby på Gotland. Exakt adress meddelas vid försäljningsstart.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
