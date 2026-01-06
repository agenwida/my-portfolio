
export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
