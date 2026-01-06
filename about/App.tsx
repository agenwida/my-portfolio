import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
// import { Navbar } from './components/Navbar';
import { ProfileHeader } from './components/ProfileHeader';
import { Timeline } from './components/Timeline';
import { SkillsGrid } from './components/SkillsGrid';
// import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-black">
      {/* <Navbar onHireClick={() => setIsAiOpen(true)} /> */}

      <main className="flex-grow w-full container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProfileHeader />
        </motion.div>


        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <Timeline />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SkillsGrid />
          </motion.div>
        </motion.div>

      </main>

      {/* <footer className="border-t border-card-border bg-card-dark py-8">
        <div className="mx-auto max-w-[1200px] px-4 text-center text-text-silver text-sm">
          <p>© {new Date().getFullYear()} Alex DeVry. All rights reserved.</p>
        </div>
      </footer> */}

      {/* <AIAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} /> */}

      {/* Floating Chat Trigger */}
      <button
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-black rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">smart_toy</span>
      </button>
    </div>
  );
};

export default App;
