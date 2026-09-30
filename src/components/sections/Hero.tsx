import { Cta } from '../Cta'
import { Icon } from '../Icon'
import { Img } from '../Img'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'
import { CollageLayout1 } from '@/components/collages/CollageLayout1'

export function Hero({ data }: { data: Home['hero'] }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="container-page overflow-x-clip pt-5 lg:-mb-18.5 lg:pt-16"
    >
      <div className="grid gap-y-8 lg:grid-cols-10 lg:gap-x-6">
        <h1
          id="hero-title"
          className="text-center text-hero-sm font-medium text-brand lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:text-left lg:text-h1"
        >
          {data.title}
        </h1>

        <div className="lg:col-span-6 lg:col-start-5 lg:row-span-3 lg:row-start-1 lg:self-start">
          <CollageLayout1 images={data.images} priority />
        </div>

        <div className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
          <ul className="mx-auto table space-y-5.5 text-left lg:mx-0">
            {data.bullets.map((bullet) => (
              <li key={bullet.text} className="flex items-start gap-4.5">
                <Icon
                  name={bullet.icon}
                  className="size-8 icon-badge bg-surface-warm p-1"
                />
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>

          <Cta cta={data.cta} className="mt-8" />
        </div>

        <figure className="card p-4 lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:max-w-review">
          <figcaption className="flex items-center gap-2">
            <Img
              src={data.review.avatar}
              alt={data.review.name}
              sizes="32px"
              className="size-8 shrink-0 rounded-full object-cover"
            />
            <span>
              <span className="flex items-center gap-2">
                <Stars value={data.review.stars} />
                <span className="text-small text-muted">
                  {data.review.ratingLabel}
                </span>
              </span>
              <span className="block text-small text-brand">
                {data.review.name}
              </span>
            </span>
          </figcaption>
          <blockquote className="mt-3 text-small lg:leading-6">
            <p>{data.review.text}</p>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
