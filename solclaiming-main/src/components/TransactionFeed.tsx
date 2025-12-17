import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TransactionFeedProps {
  language: "fr" | "en";
}

type FilterType = "all" | "claim" | "burn";

const TransactionFeed = ({ language }: TransactionFeedProps) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const t = {
    fr: {
      title: "Transactions récentes",
      all: "Toutes",
      claim: "Claim",
      burn: "Burn",
      hash: "Hash",
      amount: "Montant",
      type: "Type",
      date: "Date",
      status: "Statut",
      success: "Réussie",
      pending: "En attente",
      viewMore: "Voir sur Solscan",
    },
    en: {
      title: "Recent Transactions",
      all: "All",
      claim: "Claim",
      burn: "Burn",
      hash: "Hash",
      amount: "Amount",
      type: "Type",
      date: "Date",
      status: "Status",
      success: "Success",
      pending: "Pending",
      viewMore: "View on Solscan",
    },
  };

  const text = t[language];

  // Mock transactions
  const mockTransactions = [
    {
      hash: "5X7gH...kL9pM",
      amount: 2.45,
      type: "claim" as const,
      date: "2025-11-17 14:23",
      status: "success" as const,
    },
    {
      hash: "8K2nP...qR5tW",
      amount: 0.87,
      type: "burn" as const,
      date: "2025-11-17 13:45",
      status: "success" as const,
    },
    {
      hash: "3M9vX...bN4cY",
      amount: 5.12,
      type: "claim" as const,
      date: "2025-11-17 12:18",
      status: "success" as const,
    },
    {
      hash: "7D4hJ...fG8kL",
      amount: 1.23,
      type: "burn" as const,
      date: "2025-11-17 11:52",
      status: "pending" as const,
    },
    {
      hash: "9P6rT...wE2mN",
      amount: 3.67,
      type: "claim" as const,
      date: "2025-11-17 10:34",
      status: "success" as const,
    },
  ];

  const filteredTransactions = mockTransactions.filter(
    (tx) => filter === "all" || tx.type === filter
  );

  return (
    <section id="proof" className="bg-card/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-foreground lg:text-5xl">
            {text.title}
          </h2>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-primary" : ""}
            >
              {text.all}
            </Button>
            <Button
              size="sm"
              variant={filter === "claim" ? "default" : "outline"}
              onClick={() => setFilter("claim")}
              className={filter === "claim" ? "bg-gradient-primary" : ""}
            >
              {text.claim}
            </Button>
            <Button
              size="sm"
              variant={filter === "burn" ? "default" : "outline"}
              onClick={() => setFilter("burn")}
              className={filter === "burn" ? "bg-gradient-gold" : ""}
            >
              {text.burn}
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredTransactions.map((tx, index) => (
            <div
              key={tx.hash}
              className="group animate-fade-in overflow-hidden rounded-2xl border border-border/40 bg-card p-6 shadow-card transition-all hover:border-primary/50 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={tx.type === "claim" ? "default" : "secondary"}
                      className={tx.type === "claim" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}
                    >
                      {tx.type === "claim" ? text.claim : text.burn}
                    </Badge>
                    <Badge
                      variant={tx.status === "success" ? "default" : "secondary"}
                      className={tx.status === "success" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}
                    >
                      {tx.status === "success" ? text.success : text.pending}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">{text.hash}: </span>
                      <code className="font-mono font-medium text-foreground">{tx.hash}</code>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{text.amount}: </span>
                      <span className="font-bold text-primary">{tx.amount} SOL</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{text.date}: </span>
                      <span className="font-medium text-foreground">{tx.date}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="text-primary hover:bg-primary/10"
                >
                  <a
                    href={`https://solscan.io/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {text.viewMore}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionFeed;
