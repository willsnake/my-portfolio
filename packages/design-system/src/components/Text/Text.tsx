import { FunctionComponent } from 'preact';
import { cv } from 'css-variants'
import type { TextProps } from './types';

/**
 * Text component
 * 
 * @param props - Text properties
 * @returns Text component
 */
export const Text: FunctionComponent<TextProps> = ({
    variant = 'primary',
    className = '',
    children,
    ...rest
}) => {

    const classNames = cv({
        base: 'font-normal text-base',
        variants: {
            color: {
                primary: 'text-gray',
                secondary: 'text-lightest-gray'
            },
        },
        defaultVariants: {
            color: 'primary',
        }
    })

    return (
        <p
            {...rest}
            class={classNames({ color: variant, className: className })}
            data-variant={variant}
        >
            {children}
        </p>
    );
};

