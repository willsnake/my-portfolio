import { FunctionComponent } from 'preact';
import { cv } from 'css-variants';
import { H3 } from '../H3';
import { Topic } from './Topic';
import type { ProjectCardProps } from './types';

/**
 * ProjectCard component
 * 
 * @param props - ProjectCard properties
 * @returns ProjectCard component
 */
export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title = "Project Card Title",
  topics = ["Example"],
  description = "Project Description",
  projectLink = "#",
  className = '',
  ...rest
}) => {
  
  const cardClasses = cv({
    base: "w-full text-left mb-10",
  });

  return (
    <div className={cardClasses({ className })} {...rest}>
      <div className="px-6 py-8 bg-dark-blue mb-4">
        <H3 variant="primary" className="inline-block">{title}</H3>
        <a 
          href={projectLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-2"
        >
          <img
            width="16"
            height="16"
            src="https://willsnake.dev/assets/link-icon.svg"
            alt="Link icon that redirects to the repo url"
          />
        </a>
      </div>
      {topics.map((topic, index) => (
        <Topic key={index} text={topic} className="mr-2 mb-2" />
      ))}
      <p className="text-base text-gray mt-4">{description}</p>
    </div>
  );
};
