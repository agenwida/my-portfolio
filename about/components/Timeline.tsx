
import React from 'react';
import { TIMELINE_DATA } from '../constants.tsx';

export const Timeline: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2 rounded bg-card-dark border border-card-border text-primary">
          <span className="material-symbols-outlined">work_history</span>
        </span>
        <h2 className="text-2xl font-bold text-white">Professional Journey</h2>
      </div>
      <div className="relative space-y-12 pl-4">
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-gray-700 to-transparent"></div>
        {TIMELINE_DATA.map((item) => (
          <div key={item.id} className="relative pl-12 group">
            <div className={`absolute left-3 top-1 w-8 h-8 rounded-full bg-card-dark border-2 ${item.isCurrent ? 'border-primary shadow-[0_0_10px_rgba(19,236,236,0.4)]' : 'border-gray-600 group-hover:border-primary'} flex items-center justify-center z-10 transition-all duration-300`}>
              <div className={`w-2.5 h-2.5 rounded-full ${item.isCurrent ? 'bg-primary' : 'bg-gray-500 group-hover:bg-primary'} transition-colors`}></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className={`text-sm font-mono font-bold ${item.isCurrent ? 'text-primary' : 'text-gray-500 group-hover:text-primary transition-colors'}`}>
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.company}</p>
              <p className="text-text-silver text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
