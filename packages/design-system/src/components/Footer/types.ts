import { JSX } from 'preact'

export interface FooterProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** Brand text to display */
    brandText?: string;
    /** Designer name for attribution */
    designerName?: string;
    /** Designer URL for attribution link */
    designerUrl?: string;
    /** Additional class names */
    className?: string;
    /** Show/hide designer attribution */
    showAttribution?: boolean;
}
