
import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center space-y-8 relative">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Interested in <br/>
          <span className="text-primary decoration-wavy underline decoration-2 underline-offset-8">working together?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-silver max-w-lg mx-auto leading-relaxed">
          I am currently open for new opportunities and freelance projects. Let's build something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold tracking-wide hover:shadow-[0_0_20px_rgba(19,236,236,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0">
            Start a Project
          </button>
          <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-slate-300 dark:border-silver text-slate-900 dark:text-white text-base font-bold tracking-wide hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
