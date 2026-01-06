
import React, { useState, useMemo } from 'react';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import ContactCTA from './components/ContactCTA';
// import Footer from './components/Footer';
import { PROJECTS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);

  const filteredProjects = useMemo(() => {
    if (activeCategory === Category.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <main className="flex-grow">
        <Hero />

        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <section className="px-4 md:px-10 py-8 lg:py-16">
          <div className="max-w-[1200px] mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-border-dark mb-4">
                  search_off
                </span>
                <p className="text-xl text-slate-500 dark:text-silver">No projects found in this category.</p>
                <button
                  onClick={() => setActiveCategory(Category.ALL)}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  View all projects
                </button>
              </div>
            )}
          </div>
        </section>

        <ContactCTA />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
