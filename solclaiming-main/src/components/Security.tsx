import { Shield, Lock, Eye, Code } from "lucide-react";

interface SecurityProps {
  language: "fr" | "en";
}

const Security = ({ language }: SecurityProps) => {
  const t = {
    fr: {
      title: "Sécurité & Conformité",
      subtitle: "Votre sécurité est notre priorité absolue",
      features: [
        {
          icon: Code,
          title: "Open-source",
          desc: "Tous nos smart contracts sont open-source et vérifiables publiquement.",
        },
        {
          icon: Shield,
          title: "Audits à venir",
          desc: "Nos contrats seront audités par des firmes de sécurité reconnues.",
        },
        {
          icon: Lock,
          title: "Signature locale",
          desc: "Vos clés privées restent dans votre wallet. Nous ne les voyons jamais.",
        },
        {
          icon: Eye,
          title: "Anti-phishing",
          desc: "Vérifiez toujours l'URL et ne partagez jamais votre seed phrase.",
        },
      ],
    },
    en: {
      title: "Security & Compliance",
      subtitle: "Your security is our top priority",
      features: [
        {
          icon: Code,
          title: "Open-source",
          desc: "All our smart contracts are open-source and publicly verifiable.",
        },
        {
          icon: Shield,
          title: "Audits pending",
          desc: "Our contracts will be audited by recognized security firms.",
        },
        {
          icon: Lock,
          title: "Local signatures",
          desc: "Your private keys stay in your wallet. We never see them.",
        },
        {
          icon: Eye,
          title: "Anti-phishing",
          desc: "Always verify the URL and never share your seed phrase.",
        },
      ],
    },
  };

  const text = t[language];

  return (
    <section id="security" className="bg-card/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-5xl animate-fade-in">
            {text.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {text.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {text.features.map((feature, index) => (
            <div
              key={index}
              className="group animate-scale-in overflow-hidden rounded-2xl border border-border/40 bg-card p-6 text-center shadow-card transition-all hover:border-primary/50 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
          <p className="text-sm font-medium text-primary">
            {language === "fr" 
              ? "⚠️ Ne partagez jamais votre seed phrase avec qui que ce soit. Nous ne vous la demanderons jamais."
              : "⚠️ Never share your seed phrase with anyone. We will never ask for it."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
