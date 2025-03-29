import { motion } from 'framer-motion';

interface ResourceItem {
  name: string;
  description: string;
  link: string;
  backupLink?: string;
}

interface ResourceCategory {
  category: string;
  items: ResourceItem[];
}

const GettingStarted = () => {
  const resources: ResourceCategory[] = [
    {
      category: "AI Models",
      items: [
        {
          name: "Shopify LibreChat",
          description: "Your AI coding assistant for real-time help and guidance.",
          link: "https://chat.shopify.com",
          backupLink: "https://shopify.com/chat"
        },
        {
          name: "Hemingway by Tobi",
          description: "AI agent specialized in writing in the Shopify way.",
          link: "https://chat.shopify.io/c/new?agent_id=agent_es9uWyu9Ub8nDjwSuRtLv"
        },
        {
          name: "Shopify Prompts Vault",
          description: "Collection of curated prompts for effective AI interactions.",
          link: "https://vault.shopify.io/prompts/"
        }
      ]
    },
    {
      category: "Community & Support",
      items: [
        {
          name: "AI Centaurs Channel",
          description: "Connect with others using AI tools in their workflow.",
          link: "slack://channel?team=shopify&id=ai-centaurs"
        },
        {
          name: "Cursor Channel",
          description: "Discuss and share tips about using Cursor IDE.",
          link: "slack://channel?team=shopify&id=cursor"
        }
      ]
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "Cursor",
          description: "A modern IDE with AI capabilities built-in.",
          link: "https://cursor.sh"
        }
      ]
    },
    {
      category: "Visual Creation",
      items: [
        {
          name: "Google Gemini",
          description: "Create stunning visuals and graphics for your projects.",
          link: "https://gemini.google.com"
        },
        {
          name: "ChatGPT & Sora",
          description: "Generate high-quality visuals and videos for your presentations.",
          link: "https://openai.com"
        }
      ]
    },
    {
      category: "Data & Collaboration",
      items: [
        {
          name: "Notebook LM",
          description: "Handle data and collaborate with your team effectively.",
          link: "https://notebooklm.google.com"
        },
        {
          name: "Perplexity",
          description: "Research and gather information for your projects.",
          link: "https://perplexity.ai"
        }
      ]
    },
    {
      category: "Integration Tools",
      items: [
        {
          name: "Zapier",
          description: "Connect different products and automate workflows.",
          link: "https://zapier.com"
        }
      ]
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
              Getting Started
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
            Essential tools and resources to help you begin your coding journey in Operations.
          </motion.p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h2 className="neon-heading mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="neon-card group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-semibold text-neon-pink mb-2">{item.name}</h3>
                      <p className="text-neon-light-gray mb-4">{item.description}</p>
                      <div className="flex gap-4">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neon-button-secondary"
                        >
                          Visit Site
                        </a>
                        {item.backupLink && (
                          <a
                            href={item.backupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neon-button-secondary"
                          >
                            Backup Link
                          </a>
                        )}
                      </div>
                      <div className="cyber-corner-top-left" />
                      <div className="cyber-corner-top-right" />
                      <div className="cyber-corner-bottom-left" />
                      <div className="cyber-corner-bottom-right" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tips for Using These Tools
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Start Small",
                description: "Begin with simple tasks and gradually increase complexity.",
                icon: "🌱"
              },
              {
                title: "Combine Tools",
                description: "Use multiple tools together to create powerful workflows.",
                icon: "🔄"
              },
              {
                title: "Stay Organized",
                description: "Keep track of your resources and document your progress.",
                icon: "📝"
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{tip.title}</h3>
                <p className="text-neon-light-gray">{tip.description}</p>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted; 