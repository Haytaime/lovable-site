import { Wallet, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  language: "fr" | "en";
  onConnectWallet: () => void;
}

const HowItWorks = ({ language, onConnectWallet }: HowItWorksProps) => {
  const t = {
    fr: {
      title: "Comment ça marche",
      step1: {
        title: "Connecter votre wallet",
        desc: "Connectez votre wallet Phantom ou Solflare en un clic.",
      },
      step2: {
        title: "Sélectionner l'action",
        desc: "Choisissez Claim ou Burn et indiquez la quantité de SOL.",
      },
      step3: {
        title: "Confirmer la transaction",
        desc: "Signez la transaction dans votre wallet et suivez-la sur Solscan.",
      },
      cta: "Commencer maintenant",
    },
    en: {
      title: "How it works",
      step1: {
        title: "Connect your wallet",
        desc: "Connect your Phantom or Solflare wallet with one click.",
      },
      step2: {
        title: "Choose action",
        desc: "Select Claim or Burn and specify the SOL amount.",
      },
      step3: {
        title: "Confirm transaction",
        desc: "Sign the transaction in your wallet and track it on Solscan.",
      },
      cta: "Get started now",
    },
  };

  const text = t[language];

  const steps = [
    {
      icon: Wallet,
      title: text.step1.title,
      desc: text.step1.desc,
    },
    {
      icon: ArrowRight,
      title: text.step2.title,
      desc: text.step2.desc,
    },
    {
      icon: CheckCircle,
      title: text.step3.title,
      desc: text.step3.desc,
    },
  ];

  return (
    <section id="how" className="bg-card/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-foreground lg:text-5xl animate-fade-in">
          {text.title}
        </h2>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-[calc(100%-200px)] -translate-x-1/2 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 lg:block" />

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-glow">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-border/40 bg-card shadow-card">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={onConnectWallet}
              className="bg-gradient-primary text-base font-semibold shadow-glow transition-all hover:scale-105"
            >
              {text.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
