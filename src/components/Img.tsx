import NextImage from 'next/image'

import manifest from '@/lib/image-sizes.json'

const SIZES: Record<string, { width: number; height: number }> = manifest

// Roughly how wide a content image lands: half the row on desktop,
// the full width of the screen below that. A section says otherwise
// when it knows better.
const DEFAULT_SIZES = '(min-width: 1024px) 50vw, 100vw'

type Props = {
  src: string
  alt: string
  className?: string
  /* for the few images above the fold, which must not wait */
  priority?: boolean
  sizes?: string
}

// The one place a content image is rendered. Keystatic records no
// dimensions and the paths come from the content files, so they cannot
// be imported statically; the sizes come from the manifest that
// scripts/image-sizes.mjs writes before every dev run and build.
export function Img({
  src,
  alt,
  className,
  priority,
  sizes = DEFAULT_SIZES,
}: Props) {
  const size = SIZES[src]
  if (!size) {
    throw new Error(`No recorded size for ${src}. Run "npm run images".`)
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={size.width}
      height={size.height}
      sizes={sizes}
      priority={priority}
      /* the optimiser refuses svg unless it is told to trust it */
      unoptimized={src.endsWith('.svg')}
    />
  )
}
