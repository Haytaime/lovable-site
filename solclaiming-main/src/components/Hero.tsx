import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";
interface HeroProps {
  language: "fr" | "en";
  onConnectWallet: () => void;
  onLearnMore: () => void;
}
const Hero = ({
  language,
  onConnectWallet,
  onLearnMore
}: HeroProps) => {
  const t = {
    fr: {
      title: "Récupérez ou brûlez vos SOL en toute sécurité",
      subtitle: "Claimez vos tokens SOL en quelques clics via Phantom. Transactions traçables et frais transparents.",
      cta1: "Connecter Phantom",
      cta2: "En savoir plus"
    },
    en: {
      title: "Claim or burn your SOL securely",
      subtitle: "Claim your SOL in a few clicks via Phantom. Traceable transactions and transparent fees.",
      cta1: "Connect Wallet",
      cta2: "Learn more"
    }
  };
  const text = t[language];
  return <section id="home" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">🔥 Live on Solana Mainnet</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              {text.title}
            </h1>

            <p className="text-lg text-muted-foreground lg:text-xl max-w-3xl mx-auto">
              {text.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" onClick={onConnectWallet} className="group bg-gradient-primary text-base font-semibold shadow-glow transition-all hover:scale-105 hover:shadow-glow">
                {text.cta1}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={onLearnMore} className="border-border/40 text-base font-semibold transition-all hover:border-primary/50 hover:bg-primary/5">
                {text.cta2}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Open-source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary animate-glow-pulse" />
                <span>Audit pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <span>{"<"}30s transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;