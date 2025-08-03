import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import type { H3Props } from './types';

/**
 * H3 component
 *
 * @param props - H3 properties
 * @returns H3 component
 */
export const H3: FunctionComponent<H3Props> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const classNames = cv({
    base: 'font-ibm-plex-mono font-medium text-xl',
    variants: {
      color: {
        primary: 'text-white',
        secondary: 'text-dark-blue',
        tertiary: 'text-dark-gray',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  });

  return (
    <h3 {...rest} class={classNames({ color: variant, className })}>
      {children}
    </h3>
  );
};
