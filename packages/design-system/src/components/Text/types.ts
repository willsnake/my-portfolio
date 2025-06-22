import { JSX } from 'preact'

export const VARIANTS_MAP = {
    primary: "primary",
    secondary: "secondary",
} as const;

export type Variants = keyof typeof VARIANTS_MAP;

export interface TextProps extends JSX.HTMLAttributes<HTMLParagraphElement> {
    variant?: keyof typeof VARIANTS_MAP;
    /** Additional class names */
    className?: string;
    /** Children elements */
    children?: preact.ComponentChildren;
}
