import type { Metadata } from "next";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Intresseanmälan | BRF Andersro",
  description:
    "Anmäl ditt intresse för en lägenhet i BRF Andersro, Visby. Bli först med att få information om lägenheter och priser.",
};

export default function Intresse() {
  const steps = [
    {
      number: "1",
      title: "Bekräftelse",
      description: "Du får en bekräftelse på din intresseanmälan via e-post.",
    },
    {
      number: "2",
      title: "Nyhetsbrev",
      description: "Du får löpande uppdateringar om projektets utveckling.",
    },
    {
      number: "3",
      title: "Förtur",
      description: "Vid försäljningsstart får du information före allmänheten.",
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
            Intresseanmälan
          </p>
          <h1 className="font-serif font-normal mb-8 animate-fade-in-up delay-200">
            <span className="text-gold-gradient">Bli en av de första</span>
          </h1>
          <div className="flex justify-center mb-8 animate-fade-in-up delay-300">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Anmäl ditt intresse för att få förtur till information om
            lägenheter, priser och försäljningsstart.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="relative p-8 lg:p-12 border border-accent/10 bg-background-card">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-px bg-accent/50" />
            <div className="absolute top-0 left-0 w-px h-16 bg-accent/50" />
            <div className="absolute bottom-0 right-0 w-16 h-px bg-accent/50" />
            <div className="absolute bottom-0 right-0 w-px h-16 bg-accent/50" />

            <div className="text-center mb-10">
              <h2 className="text-xl font-serif font-medium text-foreground mb-2">
                Fyll i dina uppgifter
              </h2>
              <div className="w-12 h-px bg-accent/30 mx-auto" />
            </div>
            <InterestForm />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              Process
            </p>
            <h2 className="font-serif font-normal">
              <span className="text-gold-gradient">Vad händer nu?</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent/30">
                  <span className="text-2xl font-serif text-accent">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
