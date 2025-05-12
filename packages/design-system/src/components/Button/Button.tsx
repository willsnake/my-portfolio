import { h, FunctionComponent } from 'preact';
import { ButtonProps } from './types';

/**
 * Button component
 * 
 * @param props - Button properties
 * @returns Button component
 */
export const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  disabled = false,
  text = 'Click Me!',
  variant = 'primary',
  onClick,
  className = '',
  children,
  ...rest
}) => {
  /**
   * Optional click handler
   */
  const handleClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
  };

  // Base classes for all button variants
  const baseClasses = 'rounded cursor-pointer text-sm font-medium py-3 px-4 min-h-[42px]';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-dark-blue text-white hover:bg-blue focus:bg-dark-blue focus:shadow-[0px_0px_5px_var(--color-blue)] focus:outline-blue',
    secondary: 'bg-transparent border border-light-gray text-light-gray hover:text-lightest-gray hover:border-lightest-gray focus:border-lightest-gray focus:shadow-[0px_0px_5px_var(--color-white)] focus:outline-none'
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      {...rest}
      class={buttonClasses}
      type={type}
      aria-disabled={disabled}
      data-variant={variant}
      onClick={handleClick}
    >
      {text || children}
    </button>
  );
};

export default Button;
