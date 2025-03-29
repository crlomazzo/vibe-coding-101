import { motion } from 'framer-motion';

interface Version {
  version: string;
  date: string;
  time: string;
  videoUrl: string;
  description: string;
}

const Evolution = () => {
  const versions: Version[] = [
    {
      version: "V1",
      date: "March 28, 2024",
      time: "2:00 PM",
      videoUrl: "https://drive.google.com/file/d/1OFmkcYPo9r3RXXuXYJvYPNzcECClZche/preview",
      description: "Initial version of the Vibe Coding website with basic structure and content"
    },
    {
      version: "V2",
      date: "March 28, 2024",
      time: "3:00 PM",
      videoUrl: "https://drive.google.com/file/d/1tdrzbrVVSSs0ED0U9v8Erw6_w95Wou9i/preview",
      description: "Enhanced design with cyberpunk elements and improved navigation"
    },
    {
      version: "V3",
      date: "March 28, 2024",
      time: "4:00 PM",
      videoUrl: "https://drive.google.com/file/d/1H6MoZyGCFd4evAii_xaz7t7v9_pKCKnd/preview",
      description: "Added animations, refined styling, and completed all main sections"
    },
    {
      version: "V4",
      date: "March 28, 2024",
      time: "8:00 PM",
      videoUrl: "https://drive.google.com/file/d/1ZD9S07XTGKNqosOAq2396UFryWumKRnx/preview",
      description: "Final version with polished animations, complete content, and optimized performance"
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
              Evolution
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
            Watch how the Vibe Coding website evolved throughout its development journey.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {versions.map((version, index) => (
              <motion.div
                key={version.version}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline line */}
                {index < versions.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-neon-pink/30" />
                )}

                <div className="relative flex items-start">
                  {/* Version marker */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neon-dark border-2 border-neon-pink flex items-center justify-center">
                    <span className="text-neon-pink font-bold">{version.version}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-grow">
                    <div className="neon-card">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-neon-pink">{version.date}</h3>
                        <p className="text-neon-cyan">{version.time}</p>
                      </div>

                      <div className="aspect-video w-full bg-neon-dark/50 rounded-lg overflow-hidden mb-4">
                        <iframe
                          className="w-full h-full"
                          src={version.videoUrl}
                          allow="autoplay"
                          allowFullScreen
                        />
                      </div>

                      <p className="text-neon-light-gray">{version.description}</p>

                      <div className="cyber-corner-top-left" />
                      <div className="cyber-corner-top-right" />
                      <div className="cyber-corner-bottom-left" />
                      <div className="cyber-corner-bottom-right" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evolution; 