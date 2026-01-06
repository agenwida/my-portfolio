
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "jQuery", icon: "devicon-jquery-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "WordPress", icon: "devicon-wordpress-plain" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Canva", icon: "devicon-canva-original colored" }

  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-dark" id="skills">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technologies & Tools</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            My preferred stack for building blazing fast, scalable, and secure web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-[#182626] px-4 py-3 transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-1"
            >
              <i className={`${skill.icon} text-xl`} />
              <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
            </div>

            // <div key={index} className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-[#182626] px-4 py-3 transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-1 cursor-default">
            //   <img 
            //     alt={skill.name} 
            //     className={`h-6 w-6 ${skill.invert ? 'invert dark:invert-0' : ''}`} 
            //     src={skill.logo} 
            //   />
            //   <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{skill.name}</span>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
