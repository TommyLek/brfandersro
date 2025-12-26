import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-4">
              BRF Andersro
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              70 moderna lägenheter med parkeringsgarage i hjärtat av Visby, Gotland.
              Planerad byggstart 2027.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider">
              Snabblänkar
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/om-projektet" className="text-muted hover:text-accent transition-colors text-sm">
                  Om projektet
                </Link>
              </li>
              <li>
                <Link href="/lagenheter" className="text-muted hover:text-accent transition-colors text-sm">
                  Lägenheterna
                </Link>
              </li>
              <li>
                <Link href="/intresse" className="text-muted hover:text-accent transition-colors text-sm">
                  Intresseanmälan
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted hover:text-accent transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Visby, Gotland</li>
              <li>
                <a href="mailto:info@brfandersro.se" className="hover:text-accent transition-colors">
                  info@brfandersro.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 mt-8 pt-8 text-center">
          <p className="text-muted text-sm">
            &copy; {currentYear} BRF Andersro. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
