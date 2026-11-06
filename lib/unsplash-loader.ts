// next/image loader that asks Unsplash's own CDN (imgix) for the right size.
// auto=format serves AVIF or WebP to browsers that support them.
// Works for a static export (o2switch) and on Vercel without a Node image server.
type LoaderArgs = { src: string; width: number; quality?: number };

export default function unsplashLoader({ src, width, quality }: LoaderArgs) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}
