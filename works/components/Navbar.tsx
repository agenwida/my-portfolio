
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-primary">terminal</span>
          <h2 className="text-xl font-bold tracking-tight">DevPortfolio</h2>
        </div>
        
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a className="text-sm font-medium hover:text-primary transition-colors text-primary" href="#">Work</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-silver" href="#">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-silver" href="#">Resume</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-silver" href="#">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-background-dark text-sm font-bold shadow-[0_0_10px_rgba(19,236,236,0.2)] hover:shadow-[0_0_15px_rgba(19,236,236,0.4)] transition-all transform hover:scale-105 active:scale-95">
            <span className="truncate">Hire Me</span>
          </button>
          <div className="md:hidden">
            <button className="text-slate-500 dark:text-silver hover:text-primary transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
