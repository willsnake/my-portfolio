import { cv } from 'css-variants';
import { FunctionComponent } from 'preact';
import type { TopicProps } from './types';

/**
 * Topic component
 *
 * @param props - Topic properties
 * @returns Topic component
 */
export const Topic: FunctionComponent<TopicProps> = ({ text = 'Topic Text', className = '', ...rest }) => {
  const topicClasses = cv({
    base: 'px-2 py-1 bg-lightest-gray inline-block rounded',
  });

  return (
    <div className={topicClasses({ className })} {...rest}>
      <span className='text-sm text-dark-gray inline-block'>{text}</span>
    </div>
  );
};
