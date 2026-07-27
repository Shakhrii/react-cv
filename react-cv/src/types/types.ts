export type StackItem = {
  icon: string;
  value: string;
};

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  stack: StackItem[];
  demo: string;
  github: string;
};