"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/om-projektet", label: "Om projektet" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <img
              src="/images/Logo_Andersro.png"
              alt="BRF Andersro"
              className="h-12 md:h-14 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-foreground/70 group-hover:text-foreground text-sm font-medium tracking-wide transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/intresse"
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
            >
              {/* Border */}
              <span className="absolute inset-0 border border-accent/40 transition-all duration-500 group-hover:border-accent" />

              {/* Fill background */}
              <span className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              {/* Text */}
              <span className="relative text-sm font-semibold tracking-widest uppercase text-accent group-hover:text-primary transition-colors duration-300">
                Intresseanmälan
              </span>

              {/* Arrow */}
              <svg
                className="relative w-4 h-4 text-accent group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-px bg-foreground transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-full h-px bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-full h-px bg-foreground transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-8 pt-4 border-t border-accent/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-item py-4 text-lg font-serif text-foreground/80 hover:text-accent transition-colors duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-accent/10">
              <Link
                href="/intresse"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <span>Anmäl intresse</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
