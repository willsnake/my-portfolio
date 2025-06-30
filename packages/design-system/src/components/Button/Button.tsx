import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
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
    if (disabled) return;

    if (onClick) {
      onClick(event);
    }
  };

  const classNames = cv({
    base: 'rounded cursor-pointer text-sm font-medium py-3 px-4 min-h-[42px]',
    variants: {
      color: {
        primary:
          'bg-dark-blue text-white hover:bg-blue focus:bg-dark-blue focus:shadow-[0px_0px_5px_var(--color-blue)] focus:outline-blue',
        secondary:
          'bg-transparent border border-light-gray text-light-gray hover:text-lightest-gray hover:border-lightest-gray focus:border-lightest-gray focus:shadow-[0px_0px_5px_var(--color-white)] focus:outline-none',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  });

  return (
    <button
      {...rest}
      class={classNames({ color: variant, className: className })}
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
