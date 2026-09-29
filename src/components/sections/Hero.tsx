import { Cta } from '../Cta'
import { Icon } from '../Icon'
import { Img } from '../Img'
import { Stars } from '../Stars'

import type { Home } from '@/lib/content'

export function Hero({ data }: { data: Home['hero'] }) {
  return (
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">{data.title}</h1>

      <ul>
        {data.bullets.map((bullet) => (
          <li key={bullet.text}>
            <Icon name={bullet.icon} className="h-[1em] w-[1em]" />
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>

      <Cta cta={data.cta} />

      <figure>
        <Img src={data.review.avatar} alt={data.review.name} />
        <figcaption>
          <Stars value={data.review.stars} />
          <span>{data.review.ratingLabel}</span>
          <span>{data.review.name}</span>
        </figcaption>
        <blockquote>
          <p>{data.review.text}</p>
        </blockquote>
      </figure>

      <ul>
        {data.images.map((image) => (
          <li key={image.file}>
            <Img src={image.file} alt={image.alt} />
          </li>
        ))}
      </ul>
    </section>
  )
}
