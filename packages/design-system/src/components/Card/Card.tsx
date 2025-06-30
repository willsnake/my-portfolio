import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import { CardProps } from './types';

/**
 * Card component
 *
 * @param props - Card properties
 * @returns Card component
 */
export const Card: FunctionComponent<CardProps> = ({
  title = 'Card Title',
  date = 'current',
  description = 'Card Description',
  className = '',
  row = 1,
  isOdd = true,
  style = {},
  children,
  ...rest
}) => {
  // Define classes with css-variants
  const cardClasses = cv({
    base: 'card relative w-full text-left px-[30px] flex flex-col pt-6 pb-8 gap-y-2 border-l border-blue ws-card last-of-type:border-0',
    variants: {
      position: {
        odd: 'lg:border-l-0 lg:text-right lg:border-r lg:ml-[1px]',
        even: '',
      },
    },
    defaultVariants: {
      position: 'even',
    },
  });

  const ballClasses = cv({
    base: 'absolute w-3 h-3 top-0 left-[-7px] border-[3px] bg-white border-blue rounded-full',
    variants: {
      position: {
        odd: 'lg:left-[99.2%]',
        even: '',
      },
    },
    defaultVariants: {
      position: 'even',
    },
  });

  const titleClasses = cv({
    base: 'text-tertiary absolute top-[-8px]',
    variants: {
      position: {
        odd: 'lg:right-[30px]',
        even: '',
      },
    },
    defaultVariants: {
      position: 'even',
    },
  });

  // Combine all styles
  const combinedStyle = {
    gridRowStart: row,
    gridRowEnd: row + 1,
    ...style,
  };

  const position = isOdd ? 'odd' : 'even';

  return (
    <div class={cardClasses({ position, className })} style={combinedStyle} {...rest}>
      <div class={ballClasses({ position })} />
      <h3 class={titleClasses({ position })}>{title}</h3>
      <p class='text-gray text-sm font-medium'>{date}</p>
      <p class='text-primary'>{description || children}</p>
    </div>
  );
};
