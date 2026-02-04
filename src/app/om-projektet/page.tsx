import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om projektet | BRF Andersro",
  description:
    "Läs mer om BRF Andersro - ett nytt bostadsprojekt i Visby med 70 moderna lägenheter och parkeringsgarage.",
};

export default function OmProjektet() {
  const stats = [
    { number: "70", label: "Lägenheter" },
    { number: "2027", label: "Planerad byggstart" },
    { number: "2029", label: "Planerad inflyttning" },
    { number: "P", label: "Garage" },
  ];

  const features = [
    "Visbys medeltida innerstad med restauranger, butiker och kultur",
    "Havet och Gotlands vackra stränder",
    "Skolor, förskolor och vardagsnära service",
    "Grönska och innergårdar i söderläge",
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
            Om projektet
          </p>
          <h1 className="font-serif font-normal mb-8 animate-fade-in-up delay-200">
            <span className="text-gold-gradient">BRF Andersro</span>
          </h1>
          <div className="flex justify-center mb-8 animate-fade-in-up delay-300">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Ett nytt kapitel i Visbys historia - moderna hem med respekt för
            platsens unika karaktär.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Vision
              </p>
              <h2 className="font-serif font-normal text-3xl lg:text-4xl">
                <span className="text-gold-gradient">Visionen</span>
              </h2>
              <div className="w-12 h-px bg-accent/30 mt-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                BRF Andersro förenar det bästa av Visbys historia med nutida
                arkitektur. 70 lägenheter — från ytsmarta ettor till generösa
                fyror — alla med ljusa rum, genomtänkta planlösningar och
                material av hög kvalitet.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Generösa fönster ger ett fantastiskt ljusinsläpp och varje hem
                är utformat med omsorg om både stil, funktion och komfort. Här
                skapas boenden där människor trivs och känner sig hemma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
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

      {/* Location Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Platsen
              </p>
              <h2 className="font-serif font-normal text-3xl lg:text-4xl">
                <span className="text-gold-gradient">Läget</span>
              </h2>
              <div className="w-12 h-px bg-accent/30 mt-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-foreground-muted text-lg leading-relaxed mb-8">
                Att bo i Visby innebär att ha allt inom räckhåll — från
                innerstadens kaféer och restauranger till Gotlands vackra
                kuststräckor. Området kring BRF Andersro erbjuder grönska,
                välplanerade innergårdar i söderläge och närhet till:
              </p>
              <ul className="space-y-4 elegant-list">
                {features.map((feature, index) => (
                  <li key={index} className="text-foreground-muted">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Section */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Bekvämlighet
              </p>
              <h2 className="font-serif font-normal text-3xl lg:text-4xl">
                <span className="text-gold-gradient">Parkering</span>
              </h2>
              <div className="w-12 h-px bg-accent/30 mt-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                Under huset finns ett modernt garage med plats för bilar,
                elcyklar och cyklar. Laddstationer för elbilar, belysning med
                rörelsedetektorer och direktåtkomst till trappuppgången via hiss
                gör vardagen enkel och trygg.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Dedikerade platser för cykelförråd och elcyklar gör det enkelt
                att leva hållbart — utan att kompromissa med bekvämligheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
                Framtid
              </p>
              <h2 className="font-serif font-normal text-3xl lg:text-4xl">
                <span className="text-gold-gradient">Hållbarhet</span>
              </h2>
              <div className="w-12 h-px bg-accent/30 mt-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-foreground-muted text-lg leading-relaxed">
                Vi bygger för framtiden. BRF Andersro projekteras med fokus på
                energieffektivitet och hållbara materialval. Moderna
                installationer och genomtänkta lösningar ger låga driftskostnader
                och minimal miljöpåverkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201, 169, 98, 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <span className="w-2 h-2 rotate-45 border border-accent/50" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <p className="text-foreground-muted text-lg mb-8">
            Vill du veta mer om projektet eller anmäla ditt intresse?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link href="/kontakt" className="btn-secondary">
              <span>Kontakta oss</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
