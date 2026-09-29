import { Icon } from '../Icon'

import type { Home } from '@/lib/content'

export function GreenImpact({ data }: { data: Home['greenImpact'] }) {
  return (
    <section aria-labelledby="green-impact-title">
      <h2 id="green-impact-title">{data.title}</h2>
      <ul>
        {data.stats.map((stat) => (
          <li key={stat.label}>
            <Icon name={stat.icon} className="h-[1em] w-[1em]" />
            <p>
              <strong>{stat.value}</strong> <span>{stat.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
