import cx from 'classnames'

import { Icon } from '../Icon'
import { Img } from '../Img'

import type { Home } from '@/lib/content'

// The second photo is the one on show, as in the design. Without a
// slider there is nothing to move, so the arrows are decoration.
const ACTIVE = 0

export function Product({ data }: { data: Home['product'] }) {
  return (
    <section
      aria-labelledby="product-title"
      className="overflow-x-clip pt-26 pb-16"
    >
      <div className="container-page grid gap-y-10 lg:grid-cols-10 lg:gap-x-6">
        <div className="lg:col-span-5 lg:col-start-1 lg:pl-9">
          <h2 id="product-title" className="section-title">
            {data.title}
          </h2>

          <ul className="mt-10 space-y-5 lg:mt-20 lg:-ml-2">
            {data.items.map((item) => (
              <li key={item.title} className="flex gap-6 lg:gap-8.5">
                <Icon
                  name={item.icon}
                  className="size-8 icon-badge bg-surface-warm p-1"
                />
                <div>
                  <h3 className="text-h3 font-medium text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-4 lg:col-start-7">
          <div className="relative mx-auto w-[89%] lg:mr-0">
            <Img
              src={data.gallery[ACTIVE].file}
              alt={data.gallery[ACTIVE].alt}
              className="aspect-[433/648] w-full object-cover"
            />

            {/* the thumbnails sit inside the photo, along its foot */}
            <ul className="absolute inset-x-0 bottom-1.25 flex justify-center gap-1.25">
              {data.gallery.map((image, i) => (
                <li key={`${image.file}-${i}`} className="w-[7.6%]">
                  <Img
                    src={image.file}
                    alt={image.alt}
                    className={cx(
                      'aspect-[33/40] w-full object-cover',
                      i === ACTIVE &&
                        'outline-2 -outline-offset-2 outline-white'
                    )}
                  />
                </li>
              ))}
            </ul>

            <Icon
              name="chevron"
              className="absolute top-1/2 -left-11 size-9.5 -translate-y-1/2 rotate-180 text-body"
            />
            <Icon
              name="chevron"
              className="absolute top-1/2 -right-13.5 size-9.5 -translate-y-1/2 text-body"
            />
          </div>

          <figcaption className="mt-5 text-center text-small text-muted">
            {data.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
