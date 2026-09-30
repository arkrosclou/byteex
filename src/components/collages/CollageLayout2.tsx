import { Img } from '@/components/Img'

type Image = { file: string; alt: string }

interface CollageLayout2Props {
  images: readonly Image[]
}

const COLLAGE = [
  'top-0 left-0 z-2 w-[35%] border-3 border-white',
  'top-1/2 left-1/2 z-1 aspect-[380/570] -translate-1/2 w-auto h-[80%]',
  'bottom-0 right-0 z-2 w-[25%] border-3 border-white',
]

export function CollageLayout2({ images }: CollageLayout2Props) {
  return (
    <ul className="relative aspect-[525/660] w-full">
      {images.slice(0, COLLAGE.length).map((image, i) => (
        <li key={image.file} className={`absolute ${COLLAGE[i % 3]}`}>
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
