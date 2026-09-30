import { Cta } from '../Cta'
import { Img } from '../Img'
import { Slider } from '../Slider'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'

export function Testimonials({ data }: { data: Home['testimonials'] }) {
  // the design runs two full rows of these, so the strip repeats
  const strip = [...data.strip, ...data.strip, ...data.strip]

  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-x-clip pb-16 lg:pb-20"
    >
      <div className="container-page text-center">
        <h2 id="testimonials-title" className="section-title">
          {data.title}
        </h2>
        <p className="mx-auto mt-5 max-w-lead lg:mt-8">{data.lead}</p>
      </div>

      <ul
        aria-label="Photos from our customers"
        className="mt-10 strip-rows grid grid-cols-4 gap-1 lg:mt-20 lg:grid-cols-12"
      >
        {strip.map((image, i) => (
          <li key={`${image.file}-${i}`} aria-hidden={i >= data.strip.length}>
            <Img
              src={image.file}
              alt={image.alt}
              sizes="(min-width: 1024px) 9vw, 25vw"
              className="aspect-[122/131] w-full object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="container-page text-center">
        <Slider
          label={data.title}
          className="mt-10 lg:mt-18"
          trackClassName="mx-auto max-w-cards"
        >
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
        </Slider>

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
