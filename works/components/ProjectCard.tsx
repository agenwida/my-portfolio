
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(19,236,236,0.1)] dark:hover:border-primary/50">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
          aria-label={project.title}
        />
        
        {/* Action Buttons on Hover */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          <a
            href={project.githubUrl}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark shadow-lg hover:bg-white transition-colors"
            title="View Source"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a
            href={project.liveUrl}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-background-dark shadow-lg hover:bg-primary transition-colors"
            title="View Live Project"
          >
            <span className="material-symbols-outlined text-[20px]">open_in_new</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-silver line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-border-dark flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-[11px] font-bold tracking-wider uppercase rounded border transition-colors ${
                idx === 0 
                  ? 'bg-primary/10 text-primary dark:bg-primary/20 border-primary/20'
                  : 'bg-gray-100 dark:bg-background-dark text-slate-600 dark:text-silver border-gray-200 dark:border-border-dark'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
