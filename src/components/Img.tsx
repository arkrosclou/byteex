/* eslint-disable @next/next/no-img-element */

// The one place a content image is rendered. It is a plain img while
// the page is still structure: next/image wants either intrinsic
// dimensions, which Keystatic does not store, or a sized container,
// which the sections do not have yet. When the layout arrives this file
// becomes a next/image wrapper and nothing else has to change.
export function Img({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}
