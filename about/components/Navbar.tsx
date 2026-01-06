
import React from 'react';

interface NavbarProps {
  onHireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background-dark/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">DevPortfolio</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors text-text-silver" href="#home">Home</a>
            <a className="text-sm font-medium text-primary" href="#about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-text-silver" href="#projects">Projects</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-text-silver" href="#contact">Contact</a>
          </nav>
          <button 
            onClick={onHireClick}
            className="hidden md:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-5 bg-primary hover:bg-cyan-300 text-black text-sm font-bold leading-normal tracking-[0.015em] transition-all"
          >
            <span>Hire Me</span>
          </button>
          <div className="md:hidden text-white">
            <span className="material-symbols-outlined cursor-pointer">menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};
