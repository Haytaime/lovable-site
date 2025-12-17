import { Button } from "@/components/ui/button";
import { Flame, Globe } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onConnectWallet: () => void;
  isConnected: boolean;
  walletAddress?: string;
  language: "fr" | "en";
  onLanguageChange: (lang: "fr" | "en") => void;
}

const Header = ({ onConnectWallet, isConnected, walletAddress, language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    fr: {
      home: "Accueil",
      why: "Pourquoi",
      how: "Comment ça marche",
      claim: "Claim / Burn",
      proof: "Proof",
      faq: "FAQ",
      security: "Sécurité",
      connect: "Connecter Phantom",
      connected: "Connecté",
    },
    en: {
      home: "Home",
      why: "Why",
      how: "How it works",
      claim: "Claim / Burn",
      proof: "Proof",
      faq: "FAQ",
      security: "Security",
      connect: "Connect Wallet",
      connected: "Connected",
    },
  };

  const text = t[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              SOL<span className="text-primary">Claiming</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.home}
            </button>
            <button onClick={() => scrollToSection("why")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.why}
            </button>
            <button onClick={() => scrollToSection("how")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.how}
            </button>
            <button onClick={() => scrollToSection("claim")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.claim}
            </button>
            <button onClick={() => scrollToSection("proof")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.proof}
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.faq}
            </button>
            <button onClick={() => scrollToSection("security")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {text.security}
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "fr" ? "en" : "fr")}
              className="hidden sm:flex"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            
            {isConnected ? (
              <div className="hidden sm:flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-xs font-medium text-primary">
                  {walletAddress?.slice(0, 4)}...{walletAddress?.slice(-4)}
                </span>
              </div>
            ) : (
              <Button onClick={onConnectWallet} className="hidden sm:flex bg-gradient-primary hover:shadow-glow transition-all">
                {text.connect}
              </Button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className="h-0.5 w-6 bg-foreground" />
                <div className="h-0.5 w-6 bg-foreground" />
                <div className="h-0.5 w-6 bg-foreground" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border/40 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("home")} className="text-left text-sm font-medium text-muted-foreground">
                {text.home}
              </button>
              <button onClick={() => scrollToSection("why")} className="text-left text-sm font-medium text-muted-foreground">
                {text.why}
              </button>
              <button onClick={() => scrollToSection("how")} className="text-left text-sm font-medium text-muted-foreground">
                {text.how}
              </button>
              <button onClick={() => scrollToSection("claim")} className="text-left text-sm font-medium text-muted-foreground">
                {text.claim}
              </button>
              <button onClick={() => scrollToSection("proof")} className="text-left text-sm font-medium text-muted-foreground">
                {text.proof}
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-left text-sm font-medium text-muted-foreground">
                {text.faq}
              </button>
              <button onClick={() => scrollToSection("security")} className="text-left text-sm font-medium text-muted-foreground">
                {text.security}
              </button>
              <div className="pt-2">
                <Button onClick={onConnectWallet} className="w-full bg-gradient-primary">
                  {isConnected ? text.connected : text.connect}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
