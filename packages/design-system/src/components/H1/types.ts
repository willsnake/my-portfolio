import { JSX } from 'preact';

export interface H1Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
  /** Additional class names */
  className?: string;
  /** Children elements */
  children?: preact.ComponentChildren;
}
