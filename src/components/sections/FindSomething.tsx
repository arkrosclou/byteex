import { Cta } from '../Cta'

import type { Home } from '@/lib/content'
import { CollageLayout1 } from '@/components/collages/CollageLayout1'

export function FindSomething({ data }: { data: Home['findSomething'] }) {
  return (
    <section
      aria-labelledby="find-something-title"
      className="overflow-x-clip pt-14 lg:pt-20"
    >
      <div className="container-page text-center">
        <h2 id="find-something-title" className="section-title">
          {data.title}
        </h2>
        <p className="mx-auto mt-5 max-w-lead">{data.lead}</p>

        <div className="mx-auto mt-10 max-w-collage">
          <CollageLayout1 images={data.images} />
        </div>

        {/* no rating line here: the design puts that in the trust bar */}
        <Cta cta={data.cta} className="mt-12" />
      </div>
    </section>
  )
}
