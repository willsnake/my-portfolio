import { FunctionComponent } from 'preact';
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

    let textColor: 'base-gray' | 'lightest-gray' = "base-gray";

    if (variant === "secondary") {
        textColor = "lightest-gray";
    }

    const baseClasses = `font-normal text-base text-${textColor}`

    return (
        <p
            {...rest}
            class={baseClasses}
            data-variant={variant}
        >
            {children}
        </p>
    );
};

export default Text;
