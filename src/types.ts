export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  stack: string[];
  highlights: string[];
  impact?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  previewUrl: string;
  demoUrl: string;
  period?: string;
  result?: string;
};
