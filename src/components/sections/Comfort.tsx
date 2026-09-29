import { Cta } from '../Cta'
import { Icon } from '../Icon'

import type { Home } from '@/lib/content'

export function Comfort({ data }: { data: Home['comfort'] }) {
  return (
    <section aria-labelledby="comfort-title" className="pt-16 pb-20">
      <div className="container-page text-center">
        <h2 id="comfort-title" className="section-title">
          {data.title}
        </h2>

        {/* the middle card carries the warm fill, as in the design */}
        <ul className="mx-auto mt-14 grid max-w-cards gap-10 lg:grid-cols-3">
          {data.cards.map((card) => (
            <li
              key={card.title}
              className="rounded-lg bg-surface-cool px-9 py-20 even:bg-surface-warm"
            >
              <Icon name={card.icon} className="mx-auto size-14 text-brand" />
              <h3 className="mt-4 text-h3 font-medium text-brand">
                {card.title}
              </h3>
              <p className="mt-5">{card.text}</p>
            </li>
          ))}
        </ul>

        <Cta
          cta={data.cta}
          stars={data.stars}
          ratingLabel={data.ratingLabel}
          className="mt-14"
        />
      </div>
    </section>
  )
}
