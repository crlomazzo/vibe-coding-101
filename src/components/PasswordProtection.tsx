import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const ShopifyAuth = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're on a Shopify domain
    const isShopifyDomain = window.location.hostname.endsWith('.shopify.io') || 
                           window.location.hostname.endsWith('.shopify.com');
    
    if (isShopifyDomain) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neon-dark flex items-center justify-center px-4">
        <motion.div 
          className="neon-card max-w-md w-full p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-3xl font-bold text-neon-pink mb-6 animate-neon-flicker">
            Loading...
          </h1>
        </motion.div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neon-dark flex items-center justify-center px-4">
        <motion.div 
          className="neon-card max-w-md w-full p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-neon-pink mb-6 animate-neon-flicker">
            Vibe Coding 101
          </h1>
          <p className="text-neon-cyan mb-8">
            This site is only accessible to Shopify employees. Please access through a Shopify domain.
          </p>
          <div className="cyber-corner-top-left" />
          <div className="cyber-corner-top-right" />
          <div className="cyber-corner-bottom-left" />
          <div className="cyber-corner-bottom-right" />
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ShopifyAuth; 