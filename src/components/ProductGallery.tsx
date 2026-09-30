'use client'

import cx from 'classnames'
import { useRef, useState } from 'react'

import { Icon } from './Icon'
import { Img } from './Img'

import type { Home } from '@/lib/content'

type Props = Pick<Home['product'], 'gallery' | 'caption'>

// One photo at a time. The thumbnails along the foot of the frame
// double as the picker, the arrows step through the same track, and a
// swipe moves it directly.
export function ProductGallery({ gallery, caption }: Props) {
  const track = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const show = (index: number) => {
    const el = track.current
    if (!el) return
    const next = (index + gallery.length) % gallery.length
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
    setActive(next)
  }

  // keeps the thumbnails in step with a swipe
  const follow = () => {
    const el = track.current
    if (el) setActive(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <figure>
      <div className="relative mx-auto w-[89%] lg:mr-0">
        <ul
          ref={track}
          onScroll={follow}
          aria-label={caption}
          className="gallery-track"
        >
          {gallery.map((image, i) => (
            <li key={`${image.file}-${i}`}>
              <Img
                src={image.file}
                alt={image.alt}
                className="aspect-[433/648] w-full object-cover"
              />
            </li>
          ))}
        </ul>

        {/* the thumbnails sit inside the photo, along its foot */}
        <ul className="absolute inset-x-0 bottom-1.25 flex justify-center gap-1.25">
          {gallery.map((image, i) => (
            <li key={`${image.file}-${i}`} className="w-[7.6%]">
              <button
                type="button"
                onClick={() => show(i)}
                aria-label={image.alt}
                aria-current={i === active}
                className="block w-full cursor-pointer"
              >
                <Img
                  src={image.file}
                  alt=""
                  className={cx(
                    'aspect-[33/40] w-full object-cover',
                    i === active && 'outline-2 -outline-offset-2 outline-white'
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => show(active - 1)}
          className="slider-arrow -left-9 rotate-180 lg:-left-11"
        >
          <Icon name="chevron" className="size-full" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => show(active + 1)}
          className="slider-arrow -right-9 lg:-right-13.5"
        >
          <Icon name="chevron" className="size-full" />
        </button>
      </div>

      <figcaption className="mt-5 text-center text-small text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}
