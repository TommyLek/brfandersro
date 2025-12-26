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
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
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
      setError("Kunde inte skicka formuläret. Kontrollera din internetanslutning och försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary/50 border border-accent/20 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
          Tack för din intresseanmälan!
        </h3>
        <p className="text-muted mb-6">
          Vi har tagit emot dina uppgifter och kommer att kontakta dig med information
          om BRF Andersro. Håll utkik i din inkorg!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary"
        >
          Skicka en till anmälan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Namn <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            E-post <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
            placeholder="din@epost.se"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
            placeholder="070-123 45 67"
          />
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium text-foreground mb-2">
            Önskad storlek
          </label>
          <select
            id="size"
            name="size"
            className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
          >
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
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-primary border border-accent/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Berätta gärna mer om vad du söker..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          defaultChecked
          className="mt-1 w-4 h-4 accent-accent"
        />
        <label htmlFor="newsletter" className="text-sm text-muted">
          Ja, jag vill prenumerera på nyhetsbrevet och få uppdateringar om BRF Andersro.
        </label>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gdpr"
          name="gdpr"
          required
          className="mt-1 w-4 h-4 accent-accent"
        />
        <label htmlFor="gdpr" className="text-sm text-muted">
          Jag godkänner att mina uppgifter sparas för att kunna bli kontaktad angående BRF Andersro. <span className="text-accent">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Skickar..." : "Skicka intresseanmälan"}
      </button>
    </form>
  );
}
