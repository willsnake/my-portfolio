import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import { Button } from '../Button';
import { H3 } from '../H3';
import { Text } from '../Text';
import type { CardBlogProps } from './types';

/**
 * CardBlog component
 *
 * @param props - CardBlog properties
 * @returns CardBlog component
 */
export const CardBlog: FunctionComponent<CardBlogProps> = ({
  title = 'How to do x & y tutorial really long article title',
  description = 'Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.',
  imageSrc = 'https://willsnake.dev/assets/blog-placeholder.webp',
  imageAlt = 'Blog post image',
  buttonText = 'Read more',
  className = '',
  onButtonClick,
  children,
  ...rest
}) => {
  const cardClasses = cv({
    base: 'min-w-[370px] max-w-[592px] text-left bg-white rounded shadow-card-blog',
  });

  return (
    <div {...rest} class={cardClasses({ className })}>
      <img src={imageSrc} alt={imageAlt} class='mb-6 rounded-t w-full h-auto' />
      <div class='px-4 pb-6'>
        <H3 variant='tertiary' className='mb-4'>
          {title}
        </H3>
        <Text variant='primary' className='mb-4'>
          {description}
        </Text>
        <Button variant='secondary' text={buttonText} onClick={onButtonClick} />
      </div>
      {children}
    </div>
  );
};
