export const VARIANTS_MAP = {
  danger: 'danger',
  dark: 'dark',
  info: 'info',
  light: 'light',
  success: 'success',
  warning: 'warning',
  primary: 'primary',
  secondary: 'secondary',
} as const;

export type Variants = keyof typeof VARIANTS_MAP;

export interface ButtonProps {
  /** Is the button currently disabled. */
  disabled?: boolean;
  /** Click handler for the button. */
  onClick?: () => void;
  /** Visual variant of button. */
  variant?: Variants;
  /** Manually defined width. */
  width?: number | string;
  /** Type of the button. */
  type?: 'button' | 'submit' | 'reset';
  /** Text of the button. */
  text?: string;
}
