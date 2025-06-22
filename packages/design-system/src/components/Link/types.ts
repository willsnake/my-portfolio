export interface LinkProps {
  /** This is where the link is going to redirect */
  to?: string;
  /** Text of the link. */
  text?: string;
  /** Additional CSS classes */
  className?: string;
  /** Link children */
  children?: React.ReactNode;
  /** Target attribute for the link */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Rel attribute for the link */
  rel?: string;
}
