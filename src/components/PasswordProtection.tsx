import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'shopify') {
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    setPassword('');
  };

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
            This site is only accessible to employees.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-3 bg-neon-dark-gray text-neon-cyan border-2 border-neon-pink rounded-lg focus:outline-none focus:border-neon-cyan transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-cyan hover:text-neon-pink transition-colors"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-neon-cyan text-sm italic">Hint: Where you work</p>
            {error && (
              <motion.p 
                className="text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-neon-pink text-neon-dark font-semibold rounded-lg hover:bg-neon-pink/90 transition-colors duration-200"
            >
              Enter
            </button>
          </form>
          <div className="cyber-corner-top-left" />
          <div className="cyber-corner-top-right" />
          <div className="cyber-corner-bottom-left" />
          <div className="cyber-corner-bottom-right" />
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Navigation isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      {children}
    </>
  );
};

export default PasswordProtection; 