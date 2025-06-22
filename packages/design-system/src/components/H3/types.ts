import { JSX } from 'preact'

export const VARIANTS_MAP = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
} as const;

export type Variants = keyof typeof VARIANTS_MAP;

export interface H3Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
    variant?: keyof typeof VARIANTS_MAP;
    /** Additional class names */
    className?: string;
    /** Children elements */
    children?: preact.ComponentChildren;
}
