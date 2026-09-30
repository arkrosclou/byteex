import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function AsSeenIn({ data }: { data: Home['asSeenIn'] }) {
  return (
    <section
      aria-labelledby="as-seen-in-title"
      className="warm-fade-in pt-12 lg:pt-19"
    >
      <div className="container-page text-center">
        <h2 id="as-seen-in-title" className="text-h5 text-muted">
          {data.label}
        </h2>

        <ul className="mt-5 press-strip">
          {data.logos.map((logo) => (
            <li key={logo.file}>
              <Img
                src={logo.file}
                alt={logo.alt}
                sizes="234px"
                className="press-logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
