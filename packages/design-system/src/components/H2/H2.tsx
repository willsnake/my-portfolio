import { FunctionComponent } from 'preact';
import { cv } from 'css-variants'
import type { H2Props } from './types';

/**
 * H2 component
 * 
 * @param props - H2 properties
 * @returns H2 component
 */
export const H2: FunctionComponent<H2Props> = ({
    variant = 'primary',
    className = '',
    children,
    ...rest
}) => {

    const classNames = cv({
        base: 'text-[32px] leading-[42px] tracking-[1px]',
        variants: {
            color: {
                primary: 'text-dark-white',
                secondary: 'text-dark-blue'
            },
        },
        defaultVariants: {
            color: 'primary',
        }
    })

    return (
        <h2
            {...rest}
            class={classNames({ color: variant, className })}
        >
            {children}
        </h2>
    );
};
