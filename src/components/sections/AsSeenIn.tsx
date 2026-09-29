import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function AsSeenIn({ data }: { data: Home['asSeenIn'] }) {
  return (
    <section
      aria-labelledby="as-seen-in-title"
      className="warm-fade-in pt-17 lg:pt-19"
    >
      <div className="container-page text-center">
        <h2 id="as-seen-in-title" className="text-h5 text-muted">
          {data.label}
        </h2>

        {/* the design turns this into a carousel on small screens; it
            wraps here instead */}
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between lg:gap-x-6">
          {data.logos.map((logo) => (
            <li key={logo.file}>
              <Img src={logo.file} alt={logo.alt} className="press-logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
