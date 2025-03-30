import { motion } from 'framer-motion';

const Blockers = () => {
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
              Getting Stuck? We've Got You!
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
            Everyone hits roadblocks when learning to code - it's totally normal! Here's how to get past the tricky parts and keep moving forward.
          </motion.p>
        </div>
      </section>

      {/* Main Blockers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="neon-heading">Common Challenges</h2>
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
                  },
                  {
                    title: "Fear of Mistakes",
                    description: "Worrying about getting things wrong or feeling stuck on problems.",
                    icon: "😰"
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

            {/* Right Column - Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="neon-heading">Solutions</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Start Small",
                    description: "Begin with easy projects and work your way up to bigger ones step by step.",
                    icon: "🌱"
                  },
                  {
                    icon: "🛠️",
                    title: "Use Helpful Tools",
                    description: "Make learning easier with friendly tools like AI helpers and beginner-friendly code editors.",
                  },
                  {
                    title: "Create a Schedule",
                    description: "Make learning a daily habit - even 15 minutes a day makes a difference!",
                    icon: "📅"
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

      {/* Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tips for Success
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Take Small Steps",
                description: "Turn big challenges into smaller, easier tasks you can tackle one at a time.",
                icon: "🎯"
              },
              {
                title: "Celebrate Wins",
                description: "Be proud of every step forward, no matter how small it seems.",
                icon: "🎉"
              },
              {
                title: "Keep at It",
                description: "Learning a little bit each day works better than cramming once in a while.",
                icon: "⚡"
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
            Ready to Take Your First Step?
          </motion.h2>
          <motion.p 
            className="text-xl text-neon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'll show you exactly where to start and guide you along the way
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

export default Blockers; 