interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-primary/50 border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all duration-300 group">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <div className="text-accent">{icon}</div>
      </div>
      <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
