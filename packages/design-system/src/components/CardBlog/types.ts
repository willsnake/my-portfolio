import { JSX } from 'preact';

export interface CardBlogProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /** Blog post title */
  title?: string;
  /** Blog post description */
  description?: string;
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Additional class names */
  className?: string;
  /** Button click handler */
  onButtonClick?: () => void;
  /** Button text */
  buttonText?: string;
}
