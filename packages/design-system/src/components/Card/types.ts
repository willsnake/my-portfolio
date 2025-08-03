import { JSX } from 'preact';

export interface CardProps {
  /** Title of the card */
  title?: string;
  /** Date or time information */
  date?: string;
  /** Description or content of the card */
  description?: string;
  /** Additional CSS classes */
  className?: string;
  /** Grid row position */
  row?: number;
  /** Whether the card is in an odd position (affects styling) */
  isOdd?: boolean;
  /** Additional style properties */
  style?: JSX.CSSProperties;
  /** Children elements */
  children?: preact.ComponentChildren;
}
