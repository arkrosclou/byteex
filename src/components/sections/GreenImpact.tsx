import { Icon } from '../Icon'

import type { Home } from '@/lib/content'

export function GreenImpact({ data }: { data: Home['greenImpact'] }) {
  return (
    <section aria-labelledby="green-impact-title">
      <h2 id="green-impact-title" className="text-h4">
        {data.title}
      </h2>
      <ul>
        {data.stats.map((stat) => (
          <li key={stat.label}>
            <Icon name={stat.icon} className="h-[1em] w-[1em]" />
            <p>
              <strong className="text-h3">{stat.value}</strong>{' '}
              <span className="text-small">{stat.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
