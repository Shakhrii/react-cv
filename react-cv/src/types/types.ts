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

export interface IFormValues {
  name: string
  email: string
  subject: string
  message: string
}