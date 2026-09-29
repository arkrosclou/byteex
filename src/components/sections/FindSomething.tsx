import { Cta } from '../Cta'
import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function FindSomething({ data }: { data: Home['findSomething'] }) {
  return (
    <section aria-labelledby="find-something-title">
      <h2 id="find-something-title">{data.title}</h2>
      <p>{data.lead}</p>

      <ul>
        {data.images.map((image) => (
          <li key={image.file}>
            <Img src={image.file} alt={image.alt} />
          </li>
        ))}
      </ul>

      <Cta cta={data.cta} stars={data.stars} ratingLabel={data.ratingLabel} />
    </section>
  )
}
