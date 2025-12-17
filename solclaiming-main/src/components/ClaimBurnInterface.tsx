import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ExternalLink, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ClaimBurnInterfaceProps {
  language: "fr" | "en";
  isConnected: boolean;
  walletAddress?: string;
  balance?: number;
  onConnectWallet: () => void;
}

const ClaimBurnInterface = ({ language, isConnected, walletAddress, balance = 0, onConnectWallet }: ClaimBurnInterfaceProps) => {
  const [amount, setAmount] = useState("");
  const [isBurn, setIsBurn] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const t = {
    fr: {
      title: "Interface Claim / Burn",
      wallet: "Wallet connecté",
      balance: "Solde disponible",
      claimAvailable: "Claim disponible",
      transactionsToBurn: "transactions à brûler",
      rewardPerTx: "Récompense par transaction",
      amount: "Quantité (SOL)",
      mode: "Mode",
      claim: "Claim",
      burn: "Burn",
      fees: "Frais estimés",
      total: "Total",
      confirm: "Confirmer la transaction",
      connect: "Connecter votre wallet",
      processing: "Transaction en cours...",
      success: "Transaction réussie !",
      viewOn: "Voir sur Solscan",
      max: "Max",
      enterAmount: "Entrez la quantité",
    },
    en: {
      title: "Claim / Burn Interface",
      wallet: "Connected wallet",
      balance: "Available balance",
      claimAvailable: "Claim available",
      transactionsToBurn: "transactions to burn",
      rewardPerTx: "Reward per transaction",
      amount: "Amount (SOL)",
      mode: "Mode",
      claim: "Claim",
      burn: "Burn",
      fees: "Estimated fees",
      total: "Total",
      confirm: "Confirm transaction",
      connect: "Connect your wallet",
      processing: "Transaction in progress...",
      success: "Transaction successful!",
      viewOn: "View on Solscan",
      max: "Max",
      enterAmount: "Enter amount",
    },
  };

  const text = t[language];
  const estimatedFees = 0.000005; // Solana tx fees
  const rewardPerTransaction = 0.02; // 0.02 SOL per transaction
  const totalTransactionsToBurn = 12; // 12 transactions to burn
  const claimableAmount = rewardPerTransaction * totalTransactionsToBurn; // 0.24 SOL

  // Set default amount to claimable amount when wallet connects in claim mode
  useEffect(() => {
    if (isConnected && !isBurn) {
      setAmount(claimableAmount.toString());
    }
  }, [isConnected, isBurn, claimableAmount]);

  const handleConfirm = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error(language === "fr" ? "Montant invalide" : "Invalid amount");
      return;
    }

    if (parseFloat(amount) > balance) {
      toast.error(language === "fr" ? "Solde insuffisant" : "Insufficient balance");
      return;
    }

    setIsProcessing(true);
    
    // Simulate transaction
    setTimeout(() => {
      const mockTxHash = "5X" + Array.from({ length: 86 }, () => 
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Math.floor(Math.random() * 58)]
      ).join("");
      
      setTxHash(mockTxHash);
      setIsProcessing(false);
      toast.success(text.success);
    }, 2500);
  };

  return (
    <section id="claim" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-5xl animate-fade-in">
          {text.title}
        </h2>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-border/40 bg-card shadow-card">
            {/* Header with wallet info */}
            {isConnected && walletAddress && (
              <div className="border-b border-border/40 bg-gradient-glass p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{text.wallet}</p>
                      <p className="font-mono text-sm font-medium text-foreground">
                        {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{text.balance}</p>
                      <p className="text-xl font-bold text-primary">{balance.toFixed(4)} SOL</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{text.claimAvailable}</p>
                      <p className="text-2xl font-bold text-primary">{claimableAmount.toFixed(2)} SOL</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {totalTransactionsToBurn} {text.transactionsToBurn}
                      </p>
                    </div>
                    <div className="border-l border-border/40 pl-4">
                      <p className="text-xs text-muted-foreground mb-1">{text.rewardPerTx}</p>
                      <p className="text-2xl font-bold text-secondary">{rewardPerTransaction.toFixed(2)} SOL</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        × {totalTransactionsToBurn} transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main form */}
            <div className="p-8 space-y-6">
              {/* Mode switch */}
              <div className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/50 p-4">
                <div className="space-y-1">
                  <Label className="text-sm font-medium">{text.mode}</Label>
                  <p className="text-xs text-muted-foreground">
                    {isBurn ? text.burn : text.claim}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-medium ${!isBurn ? 'text-primary' : 'text-muted-foreground'}`}>
                    {text.claim}
                  </span>
                  <Switch checked={isBurn} onCheckedChange={setIsBurn} />
                  <span className={`text-sm font-medium ${isBurn ? 'text-secondary' : 'text-muted-foreground'}`}>
                    {text.burn}
                  </span>
                </div>
              </div>

              {/* Amount input */}
              <div className="space-y-2">
                <Label htmlFor="amount">{text.amount}</Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    step="0.000001"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={text.enterAmount}
                    disabled={!isConnected || isProcessing}
                    className="pr-20 text-lg"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10"
                    onClick={() => setAmount(balance.toString())}
                    disabled={!isConnected || isProcessing}
                  >
                    {text.max}
                  </Button>
                </div>
              </div>

              {/* Fee breakdown */}
              {amount && parseFloat(amount) > 0 && (
                <div className="space-y-2 rounded-xl border border-border/40 bg-muted/50 p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{text.amount}</span>
                    <span className="font-medium">{parseFloat(amount).toFixed(6)} SOL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{text.fees}</span>
                    <span className="font-medium">{estimatedFees.toFixed(6)} SOL</span>
                  </div>
                  <div className="border-t border-border/40 pt-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{text.total}</span>
                      <span className="text-lg font-bold text-primary">
                        {(parseFloat(amount) + estimatedFees).toFixed(6)} SOL
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action button */}
              {isConnected ? (
                <Button
                  size="lg"
                  onClick={handleConfirm}
                  disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
                  className={`w-full text-base font-semibold ${
                    isBurn ? 'bg-gradient-gold' : 'bg-gradient-primary'
                  } shadow-glow transition-all hover:scale-[1.02]`}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {text.processing}
                    </>
                  ) : (
                    text.confirm
                  )}
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={onConnectWallet}
                  className="w-full bg-gradient-primary text-base font-semibold shadow-glow"
                >
                  {text.connect}
                </Button>
              )}

              {/* Transaction result */}
              {txHash && (
                <div className="animate-fade-in rounded-xl border border-primary/30 bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-medium text-primary">{text.success}</p>
                      <p className="font-mono text-xs text-muted-foreground break-all">
                        {txHash}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="text-primary hover:bg-primary/10"
                    >
                      <a
                        href={`https://solscan.io/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimBurnInterface;
