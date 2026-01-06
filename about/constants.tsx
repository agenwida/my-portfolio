
import { TimelineItem, SkillItem } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    period: '2021 — Present',
    title: 'Senior Front-End Developer',
    company: 'TechFlow Solutions',
    description: 'Leading a team of 4 developers to rebuild the core SaaS product using React and Python. Improved site performance by 40% and established a comprehensive design system in Figma.',
    isCurrent: true
  },
  {
    id: '2',
    period: '2019 — 2021',
    title: 'Web Developer',
    company: 'Creative Pulse Agency',
    description: 'Developed responsive websites for 20+ clients using WordPress and custom HTML/CSS/JS. Collaborated closely with UI designers to implement pixel-perfect interfaces.',
  },
  {
    id: '3',
    period: '2018 — 2019',
    title: 'Junior Developer',
    company: 'StartUp Inc.',
    description: 'Assisted in maintaining legacy codebases using jQuery and Bootstrap. Gained foundational experience in backend integration with Python scripts.',
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'HTML5 & CSS3', level: 95, icon: 'html' },
  { name: 'React.JS', level: 90, icon: 'code_blocks' },
  { name: 'JavaScript & jQuery', level: 85, icon: 'javascript' },
  { name: 'Figma / UI Design', level: 80, icon: 'design_services' },
  { name: 'Python', level: 70, icon: 'terminal' },
  { name: 'Bootstrap & WP', level: 75, icon: 'view_quilt' }
];

export const PROFILE_IMAGE = "assets/vishnu_prof.png";

export const SYSTEM_INSTRUCTION = `
You are the AI version of Alex DeVry's portfolio. 
Alex is a Senior Front-End Developer with 5+ years of experience.
Experience:
- TechFlow Solutions (2021-Present): Senior Front-End Lead. React/Python.
- Creative Pulse Agency (2019-2021): Web Developer. WordPress/HTML/CSS/JS.
- StartUp Inc. (2018-2019): Junior Developer. jQuery/Bootstrap.

Skills: React, JavaScript, TypeScript, Tailwind, Figma, Python, HTML/CSS.

Answer questions about Alex as if you are his assistant. Be professional, friendly, and helpful. 
Keep answers concise.
If asked to hire him, tell them to use the "Hire Me" button or email alex.devry@example.com (fictional for demo).
`;
