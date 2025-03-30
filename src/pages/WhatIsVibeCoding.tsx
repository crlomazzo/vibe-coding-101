import { motion } from 'framer-motion';

const WhatIsVibeCoding = () => {
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
              What is Vibe Coding?
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
            A friendly way to learn coding that focuses on solving everyday work tasks - perfect for beginners in Operations!
          </motion.p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Learn by Doing",
                description: "Start with simple tasks you do every day and learn how to make them easier with code.",
                icon: "🎯"
              },
              {
                title: "Step by Step",
                description: "Build your skills naturally by working on real tasks that matter to you.",
                icon: "🚀"
              },
              {
                title: "Friendly Tools",
                description: "Use helpful tools like AI assistants that make learning easier and more fun.",
                icon: "⚡"
              },
              {
                title: "Your Way",
                description: "Find creative ways to solve work problems - there's no single 'right' way to do it!",
                icon: "💡"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{principle.title}</h3>
                <p className="text-neon-light-gray">{principle.description}</p>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Vibe Coding Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Time",
                description: "Let code handle the boring, repetitive tasks so you can focus on what matters.",
                icon: "⚡"
              },
              {
                title: "Work Smarter",
                description: "Find new ways to understand and improve how your team works.",
                icon: "🔍"
              },
              {
                title: "Grow Your Skills",
                description: "Learn valuable skills that help you do more in your Operations role.",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{benefit.title}</h3>
                <p className="text-neon-light-gray">{benefit.description}</p>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Getting Stuck? We've Got You!
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-neon-pink mb-6">Common Challenges</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Imposter Syndrome",
                    description: "Feeling like you're not cut out for coding or that everyone else knows more than you.",
                    icon: "😔"
                  },
                  {
                    title: "Feeling Overwhelmed",
                    description: "Getting confused by unfamiliar words and concepts that seem too complicated.",
                    icon: "🤯"
                  },
                  {
                    title: "Time Management",
                    description: "Finding time to learn while juggling your daily responsibilities.",
                    icon: "⏰"
                  }
                ].map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    className="neon-card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neon-pink mb-2">{challenge.title}</h3>
                    <p className="text-neon-light-gray">{challenge.description}</p>
                    <div className="cyber-corner-top-left" />
                    <div className="cyber-corner-top-right" />
                    <div className="cyber-corner-bottom-left" />
                    <div className="cyber-corner-bottom-right" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-neon-pink mb-6">Solutions</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Start Small",
                    description: "Begin with easy projects and work your way up to bigger ones step by step.",
                    icon: "🌱"
                  },
                  {
                    title: "Use Helpful Tools",
                    description: "Make learning easier with friendly tools like AI helpers and beginner-friendly code editors.",
                    icon: "🛠️"
                  },
                  {
                    title: "Join Others",
                    description: "Meet other beginners and share your journey - you're not alone!",
                    icon: "👥"
                  }
                ].map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    className="neon-card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neon-pink mb-2">{solution.title}</h3>
                    <p className="text-neon-light-gray">{solution.description}</p>
                    <div className="cyber-corner-top-left" />
                    <div className="cyber-corner-top-right" />
                    <div className="cyber-corner-bottom-left" />
                    <div className="cyber-corner-bottom-right" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="neon-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Begin?
          </motion.h2>
          <motion.p 
            className="text-xl text-neon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'll walk you through everything you need to know, one small step at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/getting-started" className="neon-button-primary">
              Start Here
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsVibeCoding; 