import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/photos";

type PhotoProps = {
  photo: PhotoData;
  /** Responsive sizes hint, e.g. "(min-width: 1024px) 40vw, 100vw" */
  sizes: string;
  className?: string;
  /** Only the hero image should set this */
  preload?: boolean;
  /** Override alt (e.g. empty for a purely decorative repeat) */
  alt?: string;
};

/** Fills its (relatively positioned) parent; parent controls the aspect ratio. */
export function Photo({ photo, sizes, className, preload = false, alt }: PhotoProps) {
  return (
    <Image
      src={photo.src}
      alt={alt ?? photo.alt}
      fill
      sizes={sizes}
      quality={70}
      placeholder="blur"
      blurDataURL={photo.blur}
      preload={preload}
      fetchPriority={preload ? "high" : undefined}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
