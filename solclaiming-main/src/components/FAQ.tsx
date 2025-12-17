import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  language: "fr" | "en";
}

const FAQ = ({ language }: FAQProps) => {
  const t = {
    fr: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Quels wallets sont supportés ?",
          a: "Phantom, Solflare et tout wallet Solana exposant window.solana.",
        },
        {
          q: "Y a-t-il des frais ?",
          a: "Les frais réseau sont affichés avant validation. Pas de frais cachés.",
        },
        {
          q: "Est-ce sécurisé ?",
          a: "HTTPS, contrats open-source, signature locale par votre wallet. Ne partagez jamais votre seed phrase.",
        },
        {
          q: "Combien de temps prend une transaction ?",
          a: "La plupart des transactions sont confirmées en moins de 30 secondes selon l'état du réseau Solana.",
        },
        {
          q: "Puis-je annuler une transaction ?",
          a: "Une fois signée et envoyée sur la blockchain, une transaction ne peut pas être annulée. Vérifiez toujours les détails avant de confirmer.",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Which wallets are supported?",
          a: "Phantom, Solflare and any Solana wallet exposing window.solana.",
        },
        {
          q: "Are there fees?",
          a: "Network fees are displayed before confirmation. No hidden fees.",
        },
        {
          q: "Is it secure?",
          a: "HTTPS, open-source contracts, local wallet signatures. Never share your seed phrase.",
        },
        {
          q: "How long does a transaction take?",
          a: "Most transactions are confirmed in less than 30 seconds depending on the Solana network state.",
        },
        {
          q: "Can I cancel a transaction?",
          a: "Once signed and sent on the blockchain, a transaction cannot be cancelled. Always verify details before confirming.",
        },
      ],
    },
  };

  const text = t[language];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-5xl animate-fade-in">
          {text.title}
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {text.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-border/40 bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
