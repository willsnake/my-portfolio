import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import type { H1Props } from './types';

/**
 * H1 component
 *
 * @param props - H1 properties
 * @returns H1 component
 */
export const H1: FunctionComponent<H1Props> = ({ className = '', children, ...rest }) => {
  const classNames = cv({
    base: 'font-ibm-plex-mono font-medium text-white text-[40px] leading-[52px]',
  });

  return (
    <h1 {...rest} class={classNames({ className })}>
      {children}
    </h1>
  );
};
