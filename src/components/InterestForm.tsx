"use client";

import { useState } from "react";

export default function InterestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace YOUR_FORMSPREE_ID with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mvzqeyly", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Något gick fel. Försök igen.");
      }
    } catch {
      setError(
        "Kunde inte skicka formuläret. Kontrollera din internetanslutning och försök igen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative p-12 border border-accent/20 bg-background-card text-center">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-px bg-accent" />
        <div className="absolute top-0 left-0 w-px h-12 bg-accent" />
        <div className="absolute bottom-0 right-0 w-12 h-px bg-accent" />
        <div className="absolute bottom-0 right-0 w-px h-12 bg-accent" />

        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">
          Tack för din intresseanmälan!
        </h3>
        <div className="flex justify-center mb-6">
          <div className="w-12 h-px bg-accent/30" />
        </div>
        <p className="text-foreground-muted mb-8 max-w-md mx-auto">
          Vi har tagit emot dina uppgifter och kommer att kontakta dig med
          information om BRF Andersro. Håll utkik i din inkorg!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary"
        >
          <span>Skicka en till anmälan</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label label-required">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label htmlFor="email" className="label label-required">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input"
            placeholder="din@epost.se"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="label">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input"
            placeholder="070-123 45 67"
          />
        </div>

        <div>
          <label htmlFor="size" className="label">
            Önskad storlek
          </label>
          <select id="size" name="size" className="input">
            <option value="">Välj storlek</option>
            <option value="1 rok">1 rum & kök</option>
            <option value="2 rok">2 rum & kök</option>
            <option value="3 rok">3 rum & kök</option>
            <option value="4 rok">4 rum & kök</option>
            <option value="Osäker">Vet inte ännu</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="input resize-none"
          placeholder="Berätta gärna mer om vad du söker..."
        />
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              name="newsletter"
              defaultChecked
              className="peer sr-only"
            />
            <div className="w-5 h-5 border border-accent/40 peer-checked:border-accent peer-checked:bg-accent transition-all duration-300" />
            <svg
              className="absolute inset-0 w-5 h-5 text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-sm text-foreground-muted">
            Ja, jag vill prenumerera på nyhetsbrevet och få uppdateringar om BRF
            Andersro.
          </span>
        </label>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              name="gdpr"
              required
              className="peer sr-only"
            />
            <div className="w-5 h-5 border border-accent/40 peer-checked:border-accent peer-checked:bg-accent transition-all duration-300" />
            <svg
              className="absolute inset-0 w-5 h-5 text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-sm text-foreground-muted">
            Jag godkänner att mina uppgifter sparas för att kunna bli kontaktad
            angående BRF Andersro.{" "}
            <span className="text-accent">*</span>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? "Skickar..." : "Skicka intresseanmälan"}</span>
        {!isSubmitting && (
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
        )}
      </button>
    </form>
  );
}
