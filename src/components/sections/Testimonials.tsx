import { Cta } from '../Cta'
import { Img } from '../Img'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'

export function Testimonials({ data }: { data: Home['testimonials'] }) {
  return (
    <section aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-h2 text-brand">
        {data.title}
      </h2>
      <p>{data.lead}</p>

      <ul aria-label="Photos from our customers">
        {data.strip.map((image, i) => (
          <li key={`${image.file}-${i}`}>
            <Img src={image.file} alt={image.alt} />
          </li>
        ))}
      </ul>

      <ul>
        {data.items.map((item, i) => (
          <li key={`${item.name}-${i}`} className="bg-surface-cool">
            <figure>
              <Stars value={item.stars} />
              <figcaption className="text-small text-brand">
                {item.name}
              </figcaption>
              <blockquote>
                <p>{item.text}</p>
              </blockquote>
            </figure>
          </li>
        ))}
      </ul>

      <Cta cta={data.cta} stars={data.stars} ratingLabel={data.ratingLabel} />
    </section>
  )
}
