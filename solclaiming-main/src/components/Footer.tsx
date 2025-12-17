import { Flame, Twitter, Github, Mail } from "lucide-react";

interface FooterProps {
  language: "fr" | "en";
  onLanguageChange: (lang: "fr" | "en") => void;
}

const Footer = ({ language, onLanguageChange }: FooterProps) => {
  const t = {
    fr: {
      tagline: "Claim ou burn vos SOL en toute sécurité",
      product: "Produit",
      claim: "Claim / Burn",
      how: "Comment ça marche",
      security: "Sécurité",
      resources: "Ressources",
      faq: "FAQ",
      docs: "Documentation",
      blog: "Blog",
      legal: "Légal",
      terms: "CGU",
      privacy: "Politique de confidentialité",
      mentions: "Mentions légales",
      rights: "Tous droits réservés.",
    },
    en: {
      tagline: "Claim or burn your SOL securely",
      product: "Product",
      claim: "Claim / Burn",
      how: "How it works",
      security: "Security",
      resources: "Resources",
      faq: "FAQ",
      docs: "Documentation",
      blog: "Blog",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      mentions: "Legal Notice",
      rights: "All rights reserved.",
    },
  };

  const text = t[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-card/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Flame className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                SOL<span className="text-primary">Claiming</span>
              </span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              {text.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:contact@solmanager.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">{text.product}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("claim")} className="text-muted-foreground transition-colors hover:text-primary">
                  {text.claim}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("how")} className="text-muted-foreground transition-colors hover:text-primary">
                  {text.how}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("security")} className="text-muted-foreground transition-colors hover:text-primary">
                  {text.security}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">{text.resources}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-muted-foreground transition-colors hover:text-primary">
                  {text.faq}
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {text.docs}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {text.blog}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">{text.legal}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {text.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {text.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {text.mentions}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2025 SOL Manager. {text.rights}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onLanguageChange("fr")}
              className={`font-medium transition-colors ${
                language === "fr" ? "text-primary" : "hover:text-primary"
              }`}
            >
              Français
            </button>
            <span>/</span>
            <button
              onClick={() => onLanguageChange("en")}
              className={`font-medium transition-colors ${
                language === "en" ? "text-primary" : "hover:text-primary"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
