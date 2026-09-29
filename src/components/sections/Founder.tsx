import { Cta } from '../Cta'
import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function Founder({ data }: { data: Home['founder'] }) {
  return (
    <section aria-labelledby="founder-title">
      <h2 id="founder-title">{data.title}</h2>

      <ul>
        {data.images.map((image) => (
          <li key={image.file}>
            <Img src={image.file} alt={image.alt} />
          </li>
        ))}
      </ul>

      {data.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}

      <Cta cta={data.cta} />
    </section>
  )
}
