import { motion } from 'framer-motion';

const CodeVibing = () => {
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
              Code Vibing in Operations
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
            Discover how Operations professionals are using code to solve real problems and automate their workflows.
          </motion.p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "SQL for Data Analysis",
                description: "Using SQL to query and analyze data, generate reports, and identify trends.",
                useCases: [
                  "Automated weekly performance reports",
                  "Customer behavior analysis",
                  "Inventory optimization",
                  "Sales forecasting"
                ],
                icon: "📊"
              },
              {
                title: "Creating Presentations",
                description: "Automating the creation of presentations and data visualizations.",
                useCases: [
                  "Stakeholder updates",
                  "Performance dashboards",
                  "Project status reports",
                  "Team metrics"
                ],
                icon: "📈"
              },
              {
                title: "Gathering Feedback & Insights",
                description: "Collecting and analyzing feedback to drive improvements.",
                useCases: [
                  "Customer feedback processing",
                  "Employee satisfaction surveys",
                  "Product feature analysis",
                  "Service quality metrics"
                ],
                icon: "💡"
              },
              {
                title: "Quality Control",
                description: "Automating quality checks and validation processes.",
                useCases: [
                  "Data validation",
                  "Process monitoring",
                  "Compliance checking",
                  "Performance tracking"
                ],
                icon: "✅"
              }
            ].map((example, index) => (
              <motion.div
                key={example.title}
                className="neon-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {example.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-pink mb-2">{example.title}</h3>
                <p className="text-neon-light-gray mb-4">{example.description}</p>
                <ul className="space-y-2">
                  {example.useCases.map((useCase, i) => (
                    <li key={i} className="text-neon-light-gray flex items-center">
                      <span className="text-neon-cyan mr-2">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
                <div className="cyber-corner-top-left" />
                <div className="cyber-corner-top-right" />
                <div className="cyber-corner-bottom-left" />
                <div className="cyber-corner-bottom-right" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neon-dark-gray relative neon-grid">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="neon-heading text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your First Project?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Choose an Example",
                description: "Pick one of the examples above that resonates with your work.",
                icon: "🎯"
              },
              {
                title: "Break It Down",
                description: "Identify the specific tasks and data you'll need to work with.",
                icon: "🔍"
              },
              {
                title: "Get Help",
                description: "Use AI tools and communities to guide you through the process.",
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
            Start Your Coding Journey Today
          </motion.h2>
          <motion.p 
            className="text-xl text-neon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Check out our getting started guide and begin automating your workflows
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

export default CodeVibing; 