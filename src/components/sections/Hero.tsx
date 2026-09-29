import { Cta } from '../Cta'
import { Icon } from '../Icon'
import { Img } from '../Img'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'

// The middle photo of the collage is taller than the two beside it.
const COLLAGE = [
  'basis-[32%] aspect-[123/167] lg:aspect-[221/317]',
  'basis-[36%] aspect-[132/217] lg:aspect-[256/418]',
  'basis-[32%] aspect-[122/167] lg:aspect-[233/317]',
]

export function Hero({ data }: { data: Home['hero'] }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="container-page pt-5 lg:pt-16"
    >
      {/* One column on mobile, and on desktop the collage moves into a
          second column beside the copy. */}
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-6">
        <h1
          id="hero-title"
          className="text-[26px]/tight text-brand text-center lg:col-start-1 lg:row-start-1 lg:text-h1 lg:text-left"
        >
          {data.title}
        </h1>

        <div className="relative lg:col-start-2 lg:row-span-3 lg:row-start-1">
          {/* The warm band behind the photos, desktop only. It reaches
              past them on the left and is flush on the right. */}
          <div
            aria-hidden="true"
            className="from-surface-warm/20 to-surface-warm/70 absolute top-1/2 right-0 -left-3 hidden h-[45%] -translate-y-1/2 bg-linear-to-b lg:block"
          />

          <ul className="relative flex items-center justify-center gap-[2px] lg:gap-[3px]">
            {data.images.map((image, i) => (
              <li key={image.file} className={COLLAGE[i % 3]}>
                <Img
                  src={image.file}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="mx-auto table space-y-6 text-left lg:mx-0 lg:space-y-8">
            {data.bullets.map((bullet) => (
              <li key={bullet.text} className="flex items-start gap-4">
                <Icon
                  name={bullet.icon}
                  className="text-brand mt-px size-6 shrink-0"
                />
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>

          <Cta cta={data.cta} className="mt-8 text-center lg:text-left" />
        </div>

        <figure className="rounded-lg bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] lg:col-start-1 lg:row-start-3">
          <figcaption className="flex items-center gap-3">
            <Img
              src={data.review.avatar}
              alt={data.review.name}
              className="size-10 shrink-0 rounded-full object-cover"
            />
            <span className="text-small text-brand">{data.review.name}</span>
            <Stars value={data.review.stars} />
            <span className="text-small text-muted">
              {data.review.ratingLabel}
            </span>
          </figcaption>
          <blockquote className="text-small mt-3">
            <p>{data.review.text}</p>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
