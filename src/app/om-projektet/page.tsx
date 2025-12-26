import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om projektet | BRF Andersro",
  description: "Läs mer om BRF Andersro - ett nytt bostadsprojekt i Visby med 70 moderna lägenheter och parkeringsgarage.",
};

export default function OmProjektet() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Om projektet
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">BRF Andersro</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Ett nytt kapitel i Visbys historia - moderna hem med respekt för platsens unika karaktär.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-gold-gradient">
                Visionen
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                BRF Andersro är mer än bara ett bostadsprojekt - det är en vision om modernt boende
                i harmoni med Gotlands unika miljö. Vi skapar 70 lägenheter där kvalitet, design
                och hållbarhet står i centrum.
              </p>
              <p className="text-muted leading-relaxed">
                Varje detalj är genomtänkt för att skapa hem där människor trivs och känner sig
                hemma. Från de ljusa, välplanerade lägenheterna till de gemensamma utrymmena
                som främjar gemenskap och möten mellan grannar.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-gold-gradient">
                Läget
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Visby - Gotlands pärla och Sveriges enda UNESCO-listade stad. Här möts historia
                och nutid på ett sätt som är svårt att hitta någon annanstans. BRF Andersro
                ligger strategiskt placerat med närhet till:
              </p>
              <ul className="text-muted space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Visbys medeltida innerstad med restauranger, butiker och kultur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Havet och Gotlands vackra stränder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Skolor, förskolor och service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Goda kommunikationer och färjeläge</span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-gold-gradient">
                Projektet i siffror
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-primary/50 border border-accent/10 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif font-bold text-accent mb-2">70</p>
                  <p className="text-muted text-sm">Lägenheter</p>
                </div>
                <div className="bg-primary/50 border border-accent/10 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif font-bold text-accent mb-2">2027</p>
                  <p className="text-muted text-sm">Byggstart</p>
                </div>
                <div className="bg-primary/50 border border-accent/10 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif font-bold text-accent mb-2">2029</p>
                  <p className="text-muted text-sm">Inflyttning</p>
                </div>
                <div className="bg-primary/50 border border-accent/10 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif font-bold text-accent mb-2">P</p>
                  <p className="text-muted text-sm">Garage</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-gold-gradient">
                Hållbarhet
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Vi bygger för framtiden. BRF Andersro projekteras med fokus på energieffektivitet
                och hållbara materialval. Moderna installationer och genomtänkta lösningar ger
                låga driftskostnader och minimal miljöpåverkan.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted mb-6">
              Vill du veta mer om projektet eller anmäla ditt intresse?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intresse" className="btn-primary">
                Anmäl ditt intresse
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
