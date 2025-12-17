import { Shield, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhyUsProps {
  language: "fr" | "en";
}

const WhyUs = ({ language }: WhyUsProps) => {
  const t = {
    fr: {
      title: "Pourquoi nous choisir",
      security: {
        title: "Sécurité",
        desc: "Smart contracts open-source, audits à venir.",
        cta: "Voir la sécurité",
      },
      speed: {
        title: "Rapidité",
        desc: "Transactions traitées en < 30s (selon réseau).",
        cta: "Essayer maintenant",
      },
      transparency: {
        title: "Transparence",
        desc: "Frais affichés avant confirmation.",
        cta: "En savoir plus",
      },
    },
    en: {
      title: "Why choose us",
      security: {
        title: "Security",
        desc: "Open-source contracts, audits pending.",
        cta: "See security",
      },
      speed: {
        title: "Speed",
        desc: "Transactions processed in < 30s (network dependant).",
        cta: "Try now",
      },
      transparency: {
        title: "Transparency",
        desc: "Fees displayed before confirmation.",
        cta: "Learn more",
      },
    },
  };

  const text = t[language];

  const features = [
    {
      icon: Shield,
      title: text.security.title,
      desc: text.security.desc,
      cta: text.security.cta,
      color: "primary",
    },
    {
      icon: Zap,
      title: text.speed.title,
      desc: text.speed.desc,
      cta: text.speed.cta,
      color: "secondary",
    },
    {
      icon: Eye,
      title: text.transparency.title,
      desc: text.transparency.desc,
      cta: text.transparency.cta,
      color: "primary",
    },
  ];

  return (
    <section id="why" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-5xl animate-fade-in">
          {text.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 shadow-card transition-all hover:border-primary/50 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-glass opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10 space-y-6">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  <feature.icon className={`h-7 w-7 ${feature.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className={`mt-4 ${feature.color === 'primary' ? 'text-primary hover:bg-primary/10' : 'text-secondary hover:bg-secondary/10'}`}
                >
                  {feature.cta} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
