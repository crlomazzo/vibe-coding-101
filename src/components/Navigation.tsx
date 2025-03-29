import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/what-is-vibe-coding', label: 'What is Vibe Coding?' },
    { path: '/blockers', label: 'Blockers' },
    { path: '/examples', label: 'Examples' },
    { path: '/getting-started', label: 'Getting Started' },
    { path: '/library', label: 'Library' },
    { path: '/evolution', label: 'Evolution' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neon-dark/80 backdrop-blur-sm border-b border-neon-purple/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group">
            <motion.span 
              className="text-2xl font-bold text-neon-pink animate-neon-flicker relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              VIBE CODING
              <div className="absolute inset-0 border border-neon-pink/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                    location.pathname === item.path
                      ? 'text-neon-cyan'
                      : 'text-neon-light-gray hover:text-neon-pink'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                      layoutId="navbar-indicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-neon-pink/0 group-hover:bg-neon-pink/10 transition-colors duration-200 rounded" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 