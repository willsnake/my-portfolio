import { h, FunctionComponent } from 'preact';
import { CardProps } from './types';

/**
 * Card component
 * 
 * @param props - Card properties
 * @returns Card component
 */
export const Card: FunctionComponent<CardProps> = ({
  title = "Card Title",
  date = "current",
  description = "Card Description",
  className = "",
  row = 1,
  isOdd = true,
  style = {},
  children,
  ...rest
}) => {
  // Classes for odd-positioned cards
  const oddMainClasses = isOdd ? [
    "lg:border-l-0",
    "lg:text-right",
    "lg:border-r",
    "lg:ml-[1px]"
  ] : [];

  const oddBallClasses = isOdd ? [
    "lg:left-[99.2%]"
  ] : [];

  const oddTitleClasses = isOdd ? [
    "lg:right-[30px]"
  ] : [];

  // Combine all styles
  const combinedStyle = {
    gridRowStart: row,
    gridRowEnd: row + 1,
    ...style
  };

  return (
    <div
      class={`card relative w-full text-left px-[30px] flex flex-col pt-6 pb-8 gap-y-2 border-l border-blue ws-card
        last-of-type:border-0 ${className} ${oddMainClasses.join(" ")}`}
      style={combinedStyle}
      {...rest}
    >
      <div
        class={`absolute w-3 h-3 top-0 left-[-7px] border-[3px] bg-white border-blue rounded-full ${oddBallClasses.join(" ")}`}
      />
      <h3
        class={`text-tertiary absolute top-[-8px] ${oddTitleClasses.join(" ")}`}
      >
        {title}
      </h3>
      <p class="text-gray text-sm font-medium">{date}</p>
      <p class="text-primary">{description || children}</p>
    </div>
  );
};

export default Card;
