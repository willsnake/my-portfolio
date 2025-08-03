import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import type { FooterProps } from './types';

/**
 * Footer component
 *
 * @param props - Footer properties
 * @returns Footer component
 */
export const Footer: FunctionComponent<FooterProps> = ({
  brandText = '/ W I L L S N A K E',
  designerName = '@lilycaulfield',
  designerUrl = '/',
  showAttribution = true,
  className = '',
  children,
  ...rest
}) => {
  const footerClasses = cv({
    base: 'w-full h-20 bg-black-blue lg:h-[60px]',
  });

  return (
    <div {...rest} class={footerClasses({ className })}>
      <div class='h-full flex items-center content-center justify-between px-6 lg:pl-10'>
        <span class='text-sm text-white font-medium'>{brandText}</span>
        {showAttribution && (
          <p class='hidden lg:block text-white'>
            Designed by{' '}
            <a href={designerUrl} class='text-white' target='_blank' rel='noopener noreferrer'>
              {designerName}
            </a>
          </p>
        )}
      </div>
      {children}
    </div>
  );
};
