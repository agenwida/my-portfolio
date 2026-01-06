
import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: Category.ALL, label: 'All Projects' },
    { id: Category.APPS, label: 'Web Apps' },
    { id: Category.LANDING, label: 'Landing Pages' },
    { id: Category.OPEN_SOURCE, label: 'Open Source' },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-4 sticky top-16 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-transparent dark:border-border-dark/50 transition-all duration-300">
      <div className="max-w-[960px] mx-auto flex justify-center">
        <div className="inline-flex rounded-lg bg-gray-200 dark:bg-surface-dark p-1 shadow-inner overflow-x-auto max-w-full no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`relative flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white dark:bg-background-dark text-slate-900 dark:text-primary shadow-sm'
                  : 'text-slate-500 dark:text-silver hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
