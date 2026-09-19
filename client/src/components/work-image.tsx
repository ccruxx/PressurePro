import { workImage, workSrc, workSrcSet } from "@/lib/work-images";
import { cn } from "@/lib/utils";

interface WorkImageProps {
  /** Slug from WORK_IMAGES. */
  slug: string;
  /** Overrides the manifest alt text when the surrounding copy needs something specific. */
  alt?: string;
  /** Matches the CSS layout so the browser picks the right file. */
  sizes?: string;
  className?: string;
  /** The single above-the-fold image on a page should be eager + high priority. */
  priority?: boolean;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/3]". Omit to keep intrinsic. */
  aspect?: string;
}

/**
 * Renders a curated job photo with a full srcSet and intrinsic dimensions.
 * The width/height attributes are what stop the page shifting as images load,
 * which Core Web Vitals measures as CLS.
 */
export default function WorkImage({
  slug,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  priority = false,
  aspect,
}: WorkImageProps) {
  const image = workImage(slug);

  return (
    <img
      src={workSrc(image)}
      srcSet={workSrcSet(image)}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // Lowercase on purpose: react-dom/server in React 18 warns about the
      // camelCase `fetchPriority` prop, and `fetchpriority` is the real HTML
      // attribute, so this renders identically on the client and in the
      // build-time prerender without a warning.
      {...(priority ? ({ fetchpriority: "high" } as Record<string, string>) : {})}
      className={cn("w-full bg-stone-100 object-cover", aspect, className)}
    />
  );
}
