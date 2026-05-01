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
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  previewUrl: string;
  demoUrl: string;
};
