import Image from "next/image";
import packageJson from "../../../../../package.json";

type ImageSlotProps = {
    src?: string;
    alt: string;
    className?: string;
    sizes?: string;
    priority?: boolean;
    tone?: "light" | "dark" | "none";
    imageClassName?: string;
    objectPosition?: string;
};

const toneClass = {
    light: "bg-[#e6e1de]",
    dark: "bg-[#4a4341]",
    none: ""
};

const ImageSlot = ({ src, alt, className = "", sizes = "100vw", priority, tone = "light", imageClassName = "object-cover", objectPosition }: ImageSlotProps) => {
    if (src) {
        const imageSrc = src.includes("?") ? `${src}&version=${packageJson.version}` : `${src}?version=${packageJson.version}`;

        return (
            <div className={`overflow-hidden ${className}`}>
                <div className="relative h-full w-full">
                    <Image src={imageSrc} alt={alt} fill sizes={sizes} priority={priority} className={imageClassName} style={objectPosition ? { objectPosition } : undefined} />
                </div>
            </div>
        );
    }

    return <div className={`overflow-hidden ${toneClass[tone]} ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true} />;
};

export default ImageSlot;
