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
              Your First Steps
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
            Here are some friendly tools to help you start your coding journey. Don't worry - we'll show you how to use them!
          </motion.p>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Your AI Helpers",
                items: [
                  {
                    name: "Shopify LibreChat",
                    description: "Your friendly AI helper that's ready to answer questions and guide you through coding.",
                    link: "https://chat.shopify.io/c/new",
                    backupLink: "https://shopify.com/chat"
                  },
                  {
                    name: "Shopify Prompts Vault",
                    description: "A collection of helpful questions you can ask AI to get better answers.",
                    link: "https://vault.shopify.io/prompts/"
                  }
                ]
              },
              {
                category: "Your Support Network",
                items: [
                  {
                    name: "AI Centaurs Channel",
                    description: "Meet other Shopify folks who are learning to use AI tools - everyone's learning together!",
                    link: "slack://channel?team=shopify&id=ai-centaurs"
                  },
                  {
                    name: "Cursor Channel",
                    description: "Share tips and ask questions about using Cursor - it's okay to be new!",
                    link: "slack://channel?team=shopify&id=cursor"
                  }
                ]
              },
              {
                category: "Friendly Tools",
                items: [
                  {
                    name: "Cursor",
                    description: "A code editor that's like having a helpful friend right beside you as you code.",
                    link: "https://cursor.sh"
                  }
                ]
              },
              {
                category: "Making Things Look Great",
                items: [
                  {
                    name: "Google Gemini",
                    description: "Create beautiful images and graphics for your projects - no art skills needed!",
                    link: "https://gemini.google.com"
                  },
                  {
                    name: "ChatGPT & Sora",
                    description: "Make amazing visuals and videos to show off your work.",
                    link: "https://openai.com"
                  }
                ]
              },
              {
                category: "Working Together",
                items: [
                  {
                    name: "Notebook LM",
                    description: "A simple way to organize your work and share ideas with your team.",
                    link: "https://notebooklm.google.com"
                  },
                  {
                    name: "Perplexity",
                    description: "Find answers to your questions and learn more about any topic.",
                    link: "https://perplexity.ai"
                  }
                ]
              },
              {
                category: "Making Apps Work Together",
                items: [
                  {
                    name: "Zapier",
                    description: "Connect your favorite apps and make them work together - no coding needed!",
                    link: "https://zapier.com"
                  }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="neon-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-neon-pink mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-neon-dark-gray rounded-lg hover:bg-neon-dark transition-colors duration-200"
                    >
                      <h4 className="text-lg font-medium text-neon-cyan mb-2">{item.name}</h4>
                      <p className="text-neon-light-gray">{item.description}</p>
                    </a>
                  ))}
                </div>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="neon-heading text-center mb-8">Quick Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Start Small",
                  description: "Pick one simple task you want to make easier. Even a tiny improvement is a win!",
                  icon: "🌱"
                },
                {
                  title: "It's OK to Copy",
                  description: "Learn from examples and adjust them to fit your needs - that's how everyone starts!",
                  icon: "📝"
                },
                {
                  title: "Ask Questions",
                  description: "Don't be shy to ask for help - everyone was a beginner once!",
                  icon: "🙋‍♀️"
                }
              ].map((tip, index) => (
                <motion.div
                  key={tip.title}
                  className="neon-card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-semibold text-neon-pink mb-2">{tip.title}</h3>
                  <p className="text-neon-light-gray">{tip.description}</p>
                  <div className="cyber-corner-top-left" />
                  <div className="cyber-corner-top-right" />
                  <div className="cyber-corner-bottom-left" />
                  <div className="cyber-corner-bottom-right" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted; 