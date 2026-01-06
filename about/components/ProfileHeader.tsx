
import React from 'react';
import { PROFILE_IMAGE } from '../constants.tsx';

export const ProfileHeader: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="bg-card-dark border border-card-border rounded-2xl p-6 md:p-10 shadow-xl overflow-hidden relative group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 overflow-hidden shadow-lg shadow-primary/20">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${PROFILE_IMAGE}")` }}
              ></div>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-black p-1.5 rounded-full border-4 border-card-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary border border-primary/20">OPEN TO WORK</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                Hello, I'm <span className="text-primary">Vishnu S Darsan</span>
              </h1>
              <p className="text-lg md:text-xl font-medium text-text-silver">
                Senior Front-End Developer with 5+ Years of Experience
              </p>
            </div>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              I build accessible, pixel-perfect, and performant web experiences. Passionate about bridging the gap between design and engineering, combining a deep understanding of UI/UX with clean, scalable code.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="../Vishnu_SDarsan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-11 px-6 bg-primary hover:bg-cyan-300 text-black text-sm font-bold rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download Resume</span>
              </a>
              <div className="flex items-center gap-3 px-4">
                <a className="text-gray-400 hover:text-white transition-colors" href="https://github.com/agenwida" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-2xl">code</span></a>
                <a className="text-gray-400 hover:text-white transition-colors" href="mailto:vishnu4693@gmail.com"><span className="material-symbols-outlined text-2xl">mail</span></a>
                <a className="text-gray-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/vishnu-s-darsan-b87231153/" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-2xl">link</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
