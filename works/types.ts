
export enum Category {
  ALL = 'all',
  APPS = 'apps',
  LANDING = 'landing',
  OPEN_SOURCE = 'opensource'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: Category;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}
