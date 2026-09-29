import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function AsSeenIn({ data }: { data: Home['asSeenIn'] }) {
  return (
    <section aria-labelledby="as-seen-in-title">
      <h2 id="as-seen-in-title" className="text-small text-body">
        {data.label}
      </h2>
      <ul>
        {data.logos.map((logo) => (
          <li key={logo.file}>
            <Img src={logo.file} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </section>
  )
}
