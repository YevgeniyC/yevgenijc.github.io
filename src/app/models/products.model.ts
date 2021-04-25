import { Links } from './links.model';
export interface Products {
  id: number;
  title: string;
  content: [object];
  link: [Links];
  image?: string;
}
