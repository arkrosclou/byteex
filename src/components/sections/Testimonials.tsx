import { Cta } from '../Cta'
import { Icon } from '../Icon'
import { Img } from '../Img'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'

export function Testimonials({ data }: { data: Home['testimonials'] }) {
  // the design runs two full rows of these, so the strip repeats
  const strip = [...data.strip, ...data.strip, ...data.strip]

  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-x-clip pb-20"
    >
      <div className="container-page text-center">
        <h2 id="testimonials-title" className="section-title">
          {data.title}
        </h2>
        <p className="mx-auto mt-8 max-w-lead">{data.lead}</p>
      </div>

      <ul
        aria-label="Photos from our customers"
        className="mt-20 strip-rows grid grid-cols-4 gap-1 lg:grid-cols-12"
      >
        {strip.map((image, i) => (
          <li key={`${image.file}-${i}`}>
            <Img
              src={image.file}
              alt={image.alt}
              className="aspect-[122/131] w-full object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="container-page text-center">
        <div className="relative mt-18">
          <ul className="mx-auto grid max-w-cards items-start gap-10 lg:grid-cols-3">
            {data.items.map((item, i) => (
              <li key={`${item.name}-${i}`} className="card p-5 text-left">
                <figure>
                  <figcaption className="flex items-center gap-3">
                    {/* the design shows an empty avatar here */}
                    <span className="size-10 shrink-0 rounded-full bg-brand" />
                    <span>
                      <Stars value={item.stars} />
                      <span className="block text-small text-brand">
                        {item.name}
                      </span>
                    </span>
                  </figcaption>
                  <blockquote className="mt-4 text-small leading-loose">
                    <p>{item.text}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>

          {/* the design carries arrows here; there is no slider behind them */}
          <Icon
            name="chevron"
            className="absolute top-1/2 -left-6 hidden size-9.5 -translate-y-1/2 rotate-180 text-body lg:block"
          />
          <Icon
            name="chevron"
            className="absolute top-1/2 -right-4.5 hidden size-9.5 -translate-y-1/2 text-body lg:block"
          />
        </div>

        <Cta
          cta={data.cta}
          stars={data.stars}
          ratingLabel={data.ratingLabel}
          className="mt-10"
        />
      </div>
    </section>
  )
}
