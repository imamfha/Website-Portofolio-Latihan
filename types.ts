
export interface Project {
  id: string;
  title: string;
  number: string;
  videoUrl: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
