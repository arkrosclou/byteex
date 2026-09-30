import { Cta } from '../Cta'

import type { Home } from '@/lib/content'
import { CollageLayout2 } from '@/components/collages/CollageLayout2'

export function Founder({ data }: { data: Home['founder'] }) {
  return (
    <section
      aria-labelledby="founder-title"
      className="bg-surface-cool pt-12 pb-12 lg:pt-20 lg:pb-16"
    >
      <div className="container-page grid gap-y-8 lg:grid-cols-10 lg:items-center lg:gap-x-6 lg:gap-y-10">
        <h2
          id="founder-title"
          className="text-center section-title lg:col-span-5 lg:col-start-6 lg:row-start-1 lg:text-left"
        >
          {data.title}
        </h2>

        {/* the collage runs a little wider than its column, as in the design */}
        <div className="lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:ml-5 lg:w-[106%]">
          <CollageLayout2 images={data.images} />
        </div>

        <div className="lg:col-span-5 lg:col-start-6 lg:row-start-2">
          <div className="space-y-6">
            {data.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <Cta cta={data.cta} className="mt-8" />
        </div>
      </div>
    </section>
  )
}
