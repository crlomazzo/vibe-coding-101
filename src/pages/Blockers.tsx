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
              Common Blockers
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
            Overcoming obstacles on your coding journey. We've all been there, and we're here to help you push through.
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
                    description: "Feeling like you don't belong or aren't good enough to code.",
                    icon: "😔"
                  },
                  {
                    title: "Overwhelming Complexity",
                    description: "Getting lost in technical jargon and complex concepts.",
                    icon: "🤯"
                  },
                  {
                    title: "Time Management",
                    description: "Finding time to learn while balancing work and life.",
                    icon: "⏰"
                  },
                  {
                    title: "Fear of Failure",
                    description: "Worrying about making mistakes or not being able to solve problems.",
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
                    description: "Begin with simple projects and gradually increase complexity.",
                    icon: "🌱"
                  },
                  {
                    title: "Use Modern Tools",
                    description: "Leverage AI assistants and modern IDEs to help you learn.",
                    icon: "🛠️"
                  },
                  {
                    title: "Build a Routine",
                    description: "Set aside dedicated time for learning, even if it's just 15 minutes a day.",
                    icon: "📅"
                  },
                  {
                    title: "Join Communities",
                    description: "Connect with others who are learning to code and share experiences.",
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
                title: "Break It Down",
                description: "Divide complex problems into smaller, manageable tasks.",
                icon: "🎯"
              },
              {
                title: "Celebrate Progress",
                description: "Acknowledge and celebrate your achievements, no matter how small.",
                icon: "🎉"
              },
              {
                title: "Stay Consistent",
                description: "Regular practice is more effective than occasional deep dives.",
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
            Ready to Overcome Your Blockers?
          </motion.h2>
          <motion.p 
            className="text-xl text-neon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Check out our getting started guide and begin your coding journey today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/getting-started" className="neon-button-primary">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blockers; 