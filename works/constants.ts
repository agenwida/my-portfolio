
import { Project, Category } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Analytics',
    description: 'A comprehensive dashboard for shop owners to track sales, inventory, and customer insights in real-time.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxnH2CvO6bDW8oiuaR-cX1hGkkJIRy7_iyNTUx8Dl_huJPGQkJhcCh8PfirYz5U96LqfIJDf0hzp01JF0xjz78QplYU_h_lKorhjct2CyyUXn-MlK5OanyKLOqrdC0DHbkA9a0z71uw2bREt9qdwtlIBnns0Gkk8Dca91oycEnhT0kq-K1CoXWP7wUcqhlSfENgkN4a74G7xeBWdq2SREoF9lG4TFY7Q8P34WZthZdz-SGyv9zOuWA4XfVhSU7IC4HKDA5B_gDkT9J',
    category: Category.APPS,
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'FinTech Mobile View',
    description: 'Responsive web view designed for a banking app, focusing on accessibility and secure transaction flows.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvIIC-P5nBvW1n_2GpdVU_wnucAQND2bkm8aO6uxUsqrMces5NmfxrW4m_fphRhu4yzJ9Q-fElJUTkEfayS2PIjMDXvrURWI1u-w42TC8Vxd8jEycL6x1jaJFsdVbcQUGB_GLVeD3CN8jHZWXc4IPhPMfKeLJKp9OEh8408KlCrHrqTx2fkrCn9S4f1XdVHDi5PMFtQF10b255DxPx-EyNv9flGLPRL10fDUEC0RpOB_lV94Oyg0fjpDDKlN7V9XkYgpJwsufKqxsy',
    category: Category.APPS,
    technologies: ['Vue.js', 'PWA'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Crypto Exchange UI',
    description: 'High-performance trading interface with real-time data visualization using WebSockets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvkEj1gvCJlWPB4iYSfJtqzBuzl_PVfJUPIkS6yrgN6G7sbfkC4WJRTapm2PL76h0AOycRMCpMHBwyENVUv4zBUSNeS4n5eGRMPd6u4_tQoMdeh948FYaqsYs315oXMcSvB1v_nDcgcvtbXOLK_jhsecS5KILN5fR0ryQFXRyLFg_dklAe7lsXFlGFUoX7fGciguY1oxoWhiNF3v0KY9DDbsCklrHYcbLhVgFo_hHGZftwjHzFCLeZaxb-ftj7Oy4DZZU9WjP8Rop7',
    category: Category.APPS,
    technologies: ['D3.js', 'WebSockets', 'React'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Aura Design System',
    description: 'A scalable component library documented in Storybook for cross-functional team usage.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Of93sPAhGBPpd_wkBmenuKZlW-ZDIv5nmXwdlczz0kihWPjbBL9dIsw_C1vuGtlS-Uziro-1094nqevxy-JZp80xFWSlZYJDh1RwxN1RdJ2df9HSu9Lx3ViFt8lkgmtI3qs1XDTBkwdcw6bUbW1ZY65QdjQi7BGey2NxzSktCCLJ5EE98UPgUNxtuw4IuCgu_gBPCuKG28sFEdNua00Z_NBZlHPzlKc9BRQ3AJYI8W6udX4r9bB5FG0SRkGnEwwFoS5u4yQoZb-h',
    category: Category.OPEN_SOURCE,
    technologies: ['Storybook', 'Sass'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '5',
    title: 'Startup Landing Page',
    description: 'High-conversion landing page with complex GSAP animations and responsive layout.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6dE6cciLj6ZFMMEus1DJ723xep0gkkSkKGFPmFJBY3zYJ9Owvne3GhAGd4vG74QwkbH2nkJFDUwj30gyrS6FR3XRKXFPklRqM6jWugkAMgtSrnY4nWKUvs4fJ-wspOWC26xnE3KUxQERTSeOyrZ1OgOs-nhItFqAFSWV7s3Rv2fwu-mbFOqj1NGgZiZLMGymzzs7wdlLYrf9dsVx209kyYk3_7YKQuc_BNWKhnN_3ajBZMET8yLU5gqUKWXcAYsMULvSeZTKYpbhe',
    category: Category.LANDING,
    technologies: ['GSAP', 'HTML/CSS'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '6',
    title: 'CLI Tool',
    description: 'An open-source Node.js CLI for scaffolding project boilerplates instantly.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1UYl-bJaUgYF0vSMmPzh8cEDDJOWCKb3tVpWe0QXwWQTgePnGKlY_OJOpMHLyzMyFEjI_i7jQCGN_mLuzG12h1YOMHrDMvjFKDrKEU3cOHVttmigPWtYiv1e6-BGx0LsK_BL6o0q-nq_N2cQyGCGGtWOYb2ROaecpmTarJxvFFMYXW2TN-JS0EejdjcwLTWWT5lzAmJsLkqUt7gGOqJFyat7Puozt-sjjp14YUaLRZhGb66bGQxuenA8lucCgVFix-ziPd9grLVrQ',
    category: Category.OPEN_SOURCE,
    technologies: ['Node.js', 'Open Source'],
    githubUrl: '#',
    liveUrl: '#'
  }
];
