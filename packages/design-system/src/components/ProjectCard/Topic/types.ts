import { JSX } from 'preact';

export interface TopicProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /** Text of the topic */
  text?: string;
  /** Additional CSS classes */
  className?: string;
}
