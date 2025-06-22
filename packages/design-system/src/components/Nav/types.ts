import { JSX } from 'preact'

export interface NavLink {
  /** Whether the link is disabled */
  disabled: boolean;
  /** Order of the link */
  order: number;
  /** Text of the link */
  text: string;
  /** URL of the link */
  url: string;
}

export interface NavProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /** Additional class names */
  className?: string;
  /** Brand text */
  brandText?: string;
  /** Links for navigation */
  links?: NavLink[];
}
