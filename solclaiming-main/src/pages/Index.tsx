import { useState } from "react";
import { toast } from "sonner";
import { Connection, PublicKey } from "@solana/web3.js";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import ClaimBurnInterface from "@/components/ClaimBurnInterface";
import TransactionFeed from "@/components/TransactionFeed";
import FAQ from "@/components/FAQ";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>();
  const [balance, setBalance] = useState(0);

  const handleConnectWallet = async () => {
    try {
      // Check if Phantom is installed
      const provider = (window as any).solana;
      
      if (!provider?.isPhantom) {
        toast.error(
          language === "fr"
            ? "Phantom non détecté. Installez Phantom ou utilisez un navigateur compatible."
            : "Phantom not found. Install Phantom or use a compatible browser."
        );
        window.open("https://phantom.app/", "_blank");
        return;
      }

      toast.loading(
        language === "fr" 
          ? "Connexion à Phantom..." 
          : "Connecting to Phantom..."
      );

      // Connect to Phantom
      const response = await provider.connect();
      const publicKey = response.publicKey.toString();
      
      toast.dismiss();
      toast.loading(
        language === "fr" 
          ? "Veuillez signer le message sur Phantom..." 
          : "Please sign the message on Phantom..."
      );

      // Request message signature for authentication
      const message = `SOL Claiming - Authentification\nDate: ${new Date().toISOString()}\nWallet: ${publicKey}`;
      const encodedMessage = new TextEncoder().encode(message);
      
      const signedMessage = await provider.signMessage(encodedMessage, "utf8");
      
      if (!signedMessage.signature) {
        throw new Error("Signature refused");
      }

      toast.dismiss();
      toast.loading(
        language === "fr" 
          ? "Récupération du solde..." 
          : "Fetching balance..."
      );
      
      // Get balance using a public RPC endpoint
      const connection = new Connection("https://api.devnet.solana.com");
      const balanceLamports = await connection.getBalance(new PublicKey(publicKey));
      const balanceSOL = balanceLamports / 1000000000;

      setIsWalletConnected(true);
      setWalletAddress(publicKey);
      setBalance(balanceSOL);
      
      toast.dismiss();
      toast.success(
        language === "fr"
          ? `Wallet connecté : ${publicKey.slice(0, 8)}...${publicKey.slice(-8)}`
          : `Wallet connected: ${publicKey.slice(0, 8)}...${publicKey.slice(-8)}`
      );
    } catch (error: any) {
      console.error("Wallet connection error:", error);
      toast.dismiss();
      toast.error(
        language === "fr"
          ? "Connexion échouée. Veuillez réessayer."
          : "Connection failed. Please try again."
      );
    }
  };

  const handleLearnMore = () => {
    const element = document.getElementById("how");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onConnectWallet={handleConnectWallet}
        isConnected={isWalletConnected}
        walletAddress={walletAddress}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      <main>
        <Hero
          language={language}
          onConnectWallet={handleConnectWallet}
          onLearnMore={handleLearnMore}
        />
        
        <StatsBar language={language} />
        
        <WhyUs language={language} />
        
        <HowItWorks
          language={language}
          onConnectWallet={handleConnectWallet}
        />
        
        <ClaimBurnInterface
          language={language}
          isConnected={isWalletConnected}
          walletAddress={walletAddress}
          balance={balance}
          onConnectWallet={handleConnectWallet}
        />
        
        <TransactionFeed language={language} />
        
        <FAQ language={language} />
        
        <Security language={language} />
      </main>

      <Footer language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default Index;
