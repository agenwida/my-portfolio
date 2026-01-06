
import React from 'react';
import { SKILLS_DATA } from '../constants.tsx';

export const SkillsGrid: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded bg-card-dark border border-card-border text-primary">
            <span className="material-symbols-outlined">dataset</span>
          </span>
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="hidden sm:flex gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Expert</div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary/50"></div> Advanced</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className="bg-card-dark p-4 rounded-xl border border-card-border hover:border-primary/50 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-gray-800 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">{skill.icon}</span>
              </div>
              <span className="text-primary font-mono text-xs font-bold">{skill.level}%</span>
            </div>
            <h3 className="text-white font-bold mb-1">{skill.name}</h3>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 relative h-32 w-full rounded-xl overflow-hidden border border-card-border group">
        <div className="absolute inset-0 bg-card-dark"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2">
            <div className="h-16 w-1 bg-primary animate-pulse"></div>
            <div className="h-12 w-1 bg-primary/60 animate-pulse delay-75"></div>
            <div className="h-20 w-1 bg-primary/80 animate-pulse delay-150"></div>
            <div className="h-8 w-1 bg-primary/40 animate-pulse delay-100"></div>
          </div>
        </div>
        <div className="absolute bottom-3 right-4 text-xs text-primary font-mono">
          &lt;build_future /&gt;
        </div>
      </div>
    </section>
  );
};
