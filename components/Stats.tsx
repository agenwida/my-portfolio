
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Extract number and suffix (e.g., "40+" -> number: 40, suffix: "+")
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(targetNumber.toString(), '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Use easeOutQuad for a smoother finish
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 2);
      
      setDisplayValue(Math.floor(easedProgress * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center text-center p-2">
      <span className="text-4xl font-black text-slate-900 dark:text-white mb-1">
        {displayValue}{suffix}
      </span>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        {statLabels[label] || label}
      </span>
    </div>
  );
};

// Map to handle potential key mismatches if labels change
const statLabels: Record<string, string> = {
  'Years Experience': 'Years Experience',
  'Projects Done': 'Projects Done',
  'Tech Stack': 'Tech Stack',
  'Client Happy': 'Client Happy'
};

const Stats: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Done' },
    { value: '9+', label: 'Tech Stack' },
    { value: '100%', label: 'Client Happy' },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-[#080f0f]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-200 dark:divide-border-dark">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
