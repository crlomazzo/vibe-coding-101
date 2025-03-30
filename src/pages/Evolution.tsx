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
    },
    {
      version: "V5",
      date: "March 29, 2024",
      time: "7:45 PM",
      videoUrl: "https://drive.google.com/file/d/1UHaSUEDUyU1mxUhbw7mq9HTW8g21qQUo/preview",
      description: "Added authentication - plot twist: even the developer got locked out! 🔒 The ultimate test of security."
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
              Our Journey
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
            See how this website grew from a simple idea into what you see today. Every step forward is progress!
          </motion.p>

          {/* Timeline Section */}
          <div className="space-y-12">
            {versions.map((version, index) => (
              <motion.div
                key={version.version}
                className="neon-card relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-semibold text-neon-pink mb-2">
                      {version.version} - The {index === 0 ? "First" : index === 1 ? "Style" : index === 2 ? "Smooth" : index === 3 ? "Polished" : "Secure"} Step
                    </h3>
                    <p className="text-neon-cyan mb-2">{version.date}</p>
                    <p className="text-neon-cyan mb-4">{version.time}</p>
                    <p className="text-neon-light-gray">{version.description}</p>
                  </div>
                  <div className="md:w-2/3 relative aspect-video">
                    <iframe
                      src={version.videoUrl}
                      className="w-full h-full rounded-lg"
                      allow="autoplay"
                      {...(version.version === "V2" ? { muted: true } : {})}
                    ></iframe>
                  </div>
                </div>
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

export default Evolution; 