import { Img } from '@/components/Img'
import cx from 'classnames'

type Image = { file: string; alt: string }

interface CollageLayout1Props {
  images: readonly Image[]
  priority?: boolean
}

const COLLAGE = [
  'basis-[29%] -mr-[5%] z-2',
  'basis-[37%] z-3 border-3 border-white',
  'basis-[29%] -ml-[5%] z-2',
]

export function CollageLayout1({ images, priority }: CollageLayout1Props) {
  return (
    <ul
      className={cx(
        'gap relative flex items-center justify-center',
        'before:absolute before:top-1/2 before:left-0 before:z-1 before:block before:h-[45%] before:w-full before:-translate-y-1/2 before:brand-gradient'
      )}
    >
      {images.map((image, i) => (
        <li key={image.file} className={COLLAGE[i % 3]}>
          <Img
            src={image.file}
            alt={image.alt}
            priority={priority}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  )
}
