import type { Metadata } from "next";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Intresseanmälan | BRF Andersro",
  description: "Anmäl ditt intresse för en lägenhet i BRF Andersro, Visby. Bli först med att få information om lägenheter och priser.",
};

export default function Intresse() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Intresseanmälan
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">Bli en av de första</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Anmäl ditt intresse för att få förtur till information om lägenheter,
            priser och försäljningsstart.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/30 border border-accent/10 rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold mb-6 text-center text-foreground">
              Fyll i dina uppgifter
            </h2>
            <InterestForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">
            <span className="text-gold-gradient">Vad händer nu?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Bekräftelse</h3>
              <p className="text-muted text-sm">
                Du får en bekräftelse på din intresseanmälan via e-post.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nyhetsbrev</h3>
              <p className="text-muted text-sm">
                Du får löpande uppdateringar om projektets utveckling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Förtur</h3>
              <p className="text-muted text-sm">
                Vid försäljningsstart får du information före allmänheten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
