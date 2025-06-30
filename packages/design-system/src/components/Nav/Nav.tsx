import { cv } from 'css-variants';
import { FunctionComponent, useState } from 'preact/compat';
// import sortBy from "lodash.sortby";
import { sort } from 'radash';
import defaultLinks from './links.json';
import type { NavProps } from './types';

const _sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

/**
 * Nav component
 *
 * @param props - Nav properties
 * @returns Nav component
 */
export const Nav: FunctionComponent<NavProps> = ({
  className = '',
  brandText = '/ W I L L S N A K E',
  links = defaultLinks,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedLinks = sort(links, (link) => link.order);
  const enabledLinks = sortedLinks.filter((link) => !link.disabled);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navClasses = cv({
    base: 'font-medium text-sm w-full bg-black-blue sticky top-0 text-dark-white z-10',
  });

  const containerClasses = cv({
    base: 'px-6 lg:container lg:mx-auto lg:pr-0 lg:pl-6 flex items-center content-center justify-between h-20',
  });

  const navBarClasses = cv({
    base: 'h-9 text-light-gray',
  });

  const buttonClasses = cv({
    base: 'w-8 h-full relative lg:hidden',
  });

  const baseSpanClass = 'block absolute h-0.5 w-full bg-dark-white transform transition duration-500 ease-in-out';

  const firstSpanClasses = cv({
    base: baseSpanClass,
    variants: {
      open: {
        true: 'rotate-45',
        false: '-translate-y-2',
      },
    },
  });

  const secondSpanClasses = cv({
    base: baseSpanClass,
    variants: {
      open: {
        true: 'opacity-0',
        false: '',
      },
    },
  });

  const thirdSpanClasses = cv({
    base: baseSpanClass,
    variants: {
      open: {
        true: '-rotate-45',
        false: 'translate-y-2',
      },
    },
  });

  const ulClasses = cv({
    base: 'w-full bg-dark-gray absolute lg:static left-0 top-20 lg:top-0 flex flex-col content-center justify-center gap-y-10 items-center h-screen pb-20 lg:pb-0 lg:inline-table lg:border-spacing-x-10 lg:list-none lg:h-full lg:w-auto lg:bg-transparent',
    variants: {
      open: {
        true: 'block',
        false: 'hidden lg:block',
      },
    },
  });

  const liClasses = cv({
    base: 'text-center lg:table-cell lg:align-middle',
  });

  const linkClasses = cv({
    base: 'hover:text-dark-white',
  });

  return (
    <div className={navClasses({ className })} {...rest}>
      <div className={containerClasses()}>
        <a href='/'>{brandText}</a>
        <nav className={navBarClasses()}>
          <button className={buttonClasses()} onClick={toggleMenu} aria-label='Open main menu'>
            <span aria-hidden='true' className={firstSpanClasses({ open: isOpen })} />
            <span aria-hidden='true' className={secondSpanClasses({ open: isOpen })} />
            <span aria-hidden='true' className={thirdSpanClasses({ open: isOpen })} />
          </button>
          <ul className={ulClasses({ open: isOpen })}>
            {enabledLinks.map(({ text, url }) => (
              <li className={liClasses()}>
                <a className={linkClasses()} onClick={toggleMenu} href={url}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
