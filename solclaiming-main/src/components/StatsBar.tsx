import { useEffect, useState } from "react";

interface StatsBarProps {
  language: "fr" | "en";
}

const StatsBar = ({ language }: StatsBarProps) => {
  const [counts, setCounts] = useState({
    burned: 0,
    transactions: 0,
    success: 0,
  });

  const targets = {
    burned: 1247856,
    transactions: 45823,
    success: 99.7,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        burned: Math.floor(targets.burned * progress),
        transactions: Math.floor(targets.transactions * progress),
        success: parseFloat((targets.success * progress).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const t = {
    fr: {
      burned: "SOL Brûlés",
      transactions: "Transactions",
      success: "Taux de Réussite",
      partners: "Audits à venir",
    },
    en: {
      burned: "SOL Burned",
      transactions: "Transactions",
      success: "Success Rate",
      partners: "Audits Pending",
    },
  };

  const text = t[language];

  return (
    <section className="border-y border-border/40 bg-card/50 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary lg:text-4xl">
              {counts.burned.toLocaleString()}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{text.burned}</div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-secondary lg:text-4xl">
              {counts.transactions.toLocaleString()}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{text.transactions}</div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary lg:text-4xl">
              {counts.success}%
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{text.success}</div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-secondary lg:text-4xl">
              Soon
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{text.partners}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
