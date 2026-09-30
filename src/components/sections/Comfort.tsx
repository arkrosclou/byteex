import { Cta } from '../Cta'
import { Icon } from '../Icon'
import { Slider } from '../Slider'

import type { Home } from '@/lib/content'

export function Comfort({ data }: { data: Home['comfort'] }) {
  return (
    <section
      aria-labelledby="comfort-title"
      className="overflow-x-clip pt-14 pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="container-page text-center">
        <h2 id="comfort-title" className="section-title">
          {data.title}
        </h2>

        {/* the middle card carries the warm fill, as in the design */}
        <Slider
          label={data.title}
          className="mt-10 lg:mt-14"
          trackClassName="mx-auto max-w-cards"
        >
          {data.cards.map((card) => (
            <li
              key={card.title}
              className="rounded-lg bg-surface-cool px-7 py-14 even:bg-surface-warm lg:px-9 lg:py-20"
            >
              <Icon name={card.icon} className="mx-auto size-14 text-brand" />
              <h3 className="mt-4 text-h3 font-medium text-brand">
                {card.title}
              </h3>
              <p className="mt-5">{card.text}</p>
            </li>
          ))}
        </Slider>

        <Cta
          cta={data.cta}
          stars={data.stars}
          ratingLabel={data.ratingLabel}
          className="mt-10 lg:mt-14"
        />
      </div>
    </section>
  )
}
