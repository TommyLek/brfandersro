import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { href: "/om-projektet", label: "Om projektet" },
    { href: "/intresse", label: "Intresseanmälan" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201, 169, 98, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/Logo_Andersro.png"
                  alt="BRF Andersro"
                  width={220}
                  height={73}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-foreground-muted leading-relaxed max-w-md mb-8">
                70 moderna lägenheter med parkeringsgarage i hjärtat av Visby,
                Gotland. Ett unikt boende som kombinerar modern komfort med
                Visbys historiska charm.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-accent/30" />
                <span className="text-xs uppercase tracking-widest text-stone">
                  Planerad byggstart 2027
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium">
                Kontakt
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground text-sm">Visby, Gotland</p>
                    <p className="text-stone text-xs mt-0.5">Sverige</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
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
                    <a
                      href="mailto:info@brfandersro.se"
                      className="text-foreground text-sm hover:text-accent transition-colors"
                    >
                      info@brfandersro.se
                    </a>
                    <p className="text-stone text-xs mt-0.5">E-post</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="py-10 border-t border-accent/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                Intresserad av en lägenhet?
              </h3>
              <p className="text-foreground-muted text-sm">
                Anmäl ditt intresse för att få förtur till information.
              </p>
            </div>
            <Link href="/intresse" className="btn-primary group">
              <span>Anmäl intresse</span>
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

        {/* Bottom bar */}
        <div className="py-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-stone text-xs">
              &copy; {currentYear} BRF Andersro. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-stone">
                57.6323°N, 18.2931°E
              </span>
              <span className="w-px h-3 bg-accent/20" />
              <span className="text-xs text-stone">
                Visby, Gotland
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-accent/10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-accent/10" />
    </footer>
  );
}
