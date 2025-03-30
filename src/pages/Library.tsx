import { motion } from 'framer-motion';

interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'video' | 'document';
}

const Library = () => {
  const resources: Resource[] = [
    {
      title: "Getting Started with Vibe Coding",
      description: "Learn the basics and get started with Vibe Coding!",
      link: "https://share.descript.com/view/tXbEINfJxsQ",
      type: "video"
    },
    {
      title: "Vibe Coding Examples 1",
      description: "Your first steps into coding - we'll walk you through everything!",
      link: "https://share.descript.com/embed/mhwxLahDzMa",
      type: "video"
    },
    {
      title: "Next Level Tips",
      description: "Ready for more? Learn some cool tricks to make your work even better!",
      link: "https://example.com/vibe-coding-102",
      type: "video"
    },
    {
      title: "Making Reviews Better with AI",
      description: "Learn how to use AI to prepare for meetings and presentations.",
      link: "https://share.descript.com/view/Hs2Hs5Hs5Hs",
      type: "video"
    },
    {
      title: "Checking Product Labels",
      description: "See how to check your work automatically instead of doing it by hand.",
      link: "https://share.descript.com/view/Hs2Hs5Hs5Hs",
      type: "video"
    },
    {
      title: "Building a Mini Shop",
      description: "Follow along as we create a small shop step by step.",
      link: "https://share.descript.com/view/Hs2Hs5Hs5Hs",
      type: "video"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden neon-grid">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-cyan rounded-full filter blur-3xl animate-pulse delay-1000" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="relative inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neon-pink mb-6 animate-neon-flicker">
              Learning Resources
            </h1>
            <div className="cyber-corner-top-left" />
            <div className="cyber-corner-top-right" />
            <div className="cyber-corner-bottom-left" />
            <div className="cyber-corner-bottom-right" />
          </motion.div>

          <motion.p 
            className="text-xl text-neon-cyan mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helpful guides and examples from your fellow Shopify team members who started just like you!
          </motion.p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">
                  {resource.type === 'video' ? '📺' : '📄'}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{resource.title}</h3>
                <p className="text-neon-light-gray mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button-secondary"
                >
                  Check it Out
                </a>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Share Your Story
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Write It Down",
                description: "Share how you solved a problem - your experience could help others!",
                icon: "📝"
              },
              {
                title: "Show Others How",
                description: "Make a simple guide to help others learn from what you figured out.",
                icon: "🎓"
              },
              {
                title: "Join the Fun",
                description: "Meet other Shopify folks who are learning to code just like you!",
                icon: "🤝"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{item.title}</h3>
                <p className="text-neon-light-gray">{item.description}</p>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="neon-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Share Your Story?
          </motion.h2>
          <motion.p 
            className="text-xl text-neon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Submit your examples and help others learn from your experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/submit" className="neon-button-primary">
              Submit Your Example
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Library; 