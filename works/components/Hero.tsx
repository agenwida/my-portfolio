
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-12 pb-8 md:pt-20 md:pb-12">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] max-w-3xl bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 md:px-10">
        <div className="flex flex-col max-w-[960px] w-full items-center text-center gap-6">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-300">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-silver max-w-2xl mx-auto font-normal leading-relaxed">
              Showcasing 5 years of crafting responsive, accessible, and performant web applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
