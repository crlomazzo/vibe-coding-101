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
      title: "Vibe Coding 101",
      description: "Introduction to vibe coding for Operations professionals",
      link: "https://example.com/vibe-coding-101",
      type: "video"
    },
    {
      title: "Vibe Coding 102",
      description: "Advanced concepts and practical applications",
      link: "https://example.com/vibe-coding-102",
      type: "video"
    },
    {
      title: "GPT for Review Prep",
      description: "Using AI to prepare for reviews and presentations",
      link: "https://example.com/gpt-review-prep",
      type: "document"
    },
    {
      title: "Product Labeling QA",
      description: "Example of automated quality control processes",
      link: "https://example.com/product-labeling-qa",
      type: "document"
    },
    {
      title: "Creating a Shop Mini",
      description: "Step-by-step guide to creating a mini shop",
      link: "https://example.com/shop-mini-guide",
      type: "document"
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
              Vibe Coding Library
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
            A collection of resources and examples from Operations professionals who are using code to solve real problems.
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neon-pink">{resource.title}</h3>
                  <span className={`text-2xl ${resource.type === 'video' ? 'text-neon-pink' : 'text-neon-cyan'}`}>
                    {resource.type === 'video' ? '🎥' : '📄'}
                  </span>
                </div>
                <p className="text-neon-light-gray mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button-secondary"
                >
                  View Resource
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

      {/* Contributing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Share Your Examples
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Document Your Work",
                description: "Share how you're using code to solve Operations challenges.",
                icon: "📝"
              },
              {
                title: "Create Tutorials",
                description: "Help others learn from your experiences and solutions.",
                icon: "🎓"
              },
              {
                title: "Build Community",
                description: "Connect with other Operations professionals learning to code.",
                icon: "🤝"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{step.title}</h3>
                <p className="text-neon-light-gray">{step.description}</p>
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