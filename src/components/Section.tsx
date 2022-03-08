import { ReactElement } from "react";

interface SectionProps {
    children: ReactElement | ReactElement[]
    className?: string,
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section
            className={className}
        >
            {
                children
            }
        </section>
    );
}