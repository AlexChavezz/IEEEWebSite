interface ImageProps {
    src: string,
    alt: string,
    title?: string,
    styleClass: string
}

export const Image = ({ src, alt, styleClass }: ImageProps) =>
    <img
        src={src}
        alt={alt}
        className={styleClass}
    />