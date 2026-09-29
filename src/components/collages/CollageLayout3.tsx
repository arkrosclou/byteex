import { Img } from '@/components/Img'
import cx from 'classnames'

type Image = { file: string; alt: string }

interface CollageLayout3Props {
  images: readonly Image[]
}

const COLLAGE = [
  'top-0 right-0 z-2 w-[43%]',
  'top-1/2 left-1/2 z-3 -translate-1/2 w-[58.5%] border-3 border-white',
  'bottom-0 left-0 z-2 w-[55.5%] aspect-[215/160] border-3 border-white',
]

export function CollageLayout3({ images }: CollageLayout3Props) {
  return (
    <ul
      className={cx(
        'border border-red-300',
        'relative aspect-[430/600] w-full',
        // two warm panels in the gaps the photos leave
        'before:absolute before:top-[11%] before:left-[8%] before:z-1 before:h-[31%] before:w-[38%] before:brand-gradient',
        'before:z-1 after:absolute after:right-[6%] after:bottom-[12%] after:h-[32%] after:w-[35%] after:brand-gradient'
      )}
    >
      {images.slice(0, COLLAGE.length).map((image, i) => (
        <li key={image.file} className={`absolute ${COLLAGE[i]}`}>
          <Img
            src={image.file}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  )
}
