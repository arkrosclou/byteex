import { Cta } from '../Cta'
import { Icon } from '../Icon'

import type { Home } from '@/lib/content'

export function Comfort({ data }: { data: Home['comfort'] }) {
  return (
    <section aria-labelledby="comfort-title">
      <h2 id="comfort-title" className="text-h2 text-brand">
        {data.title}
      </h2>

      <ul>
        {data.cards.map((card) => (
          <li key={card.title} className="bg-surface-cool">
            <Icon name={card.icon} className="h-[1em] w-[1em] text-brand" />
            <h3 className="text-h3 text-brand">{card.title}</h3>
            <p>{card.text}</p>
          </li>
        ))}
      </ul>

      <Cta cta={data.cta} stars={data.stars} ratingLabel={data.ratingLabel} />
    </section>
  )
}
