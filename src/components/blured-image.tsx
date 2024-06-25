
import { getBluredImage } from "@/utils/get-blur-image";
import Image from "next/image";

interface IBluredImage {
    src: string;
    alt: string;
    className?: string;
}

export async function BluredImage({ src, alt, className }: IBluredImage) {
    const { base64, img } = await getBluredImage(src);
    return (
        <Image
            {...img}
            alt={alt || ""}
            placeholder='blur'
            blurDataURL={base64}
            className={className}
        />
    );
}
