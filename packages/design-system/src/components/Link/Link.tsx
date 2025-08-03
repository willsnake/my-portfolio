import { cv } from 'css-variants';
import type { LinkProps } from './types';

export function Link({ to = '/', text = "I'm a Link", className, children, target, rel, ...props }: LinkProps) {
  const linkClasses = cv({
    base: 'font-medium text-sm underline text-dark-blue hover:text-blue transition-colors',
  });

  return (
    <a href={to} className={linkClasses({ className })} target={target} rel={rel} {...props}>
      {children || text}
    </a>
  );
}
