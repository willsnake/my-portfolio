import { JSX } from 'preact';

export interface ProjectCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /** Title of the project */
  title?: string;
  /** List of topics/tags for the project */
  topics?: string[];
  /** Description of the project */
  description?: string;
  /** Link to the project */
  projectLink?: string;
  /** Additional CSS classes */
  className?: string;
}
