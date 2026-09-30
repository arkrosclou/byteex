import { Icon } from '../Icon'

import type { Home } from '@/lib/content'

export function GreenImpact({ data }: { data: Home['greenImpact'] }) {
  return (
    <section
      aria-labelledby="green-impact-title"
      className="bg-surface-cool pt-12 pb-10 lg:pt-10 lg:pb-8"
    >
      <div className="container-page text-center">
        <h2 id="green-impact-title" className="text-h4 font-medium text-brand">
          {data.title}
        </h2>

        <ul className="mx-auto mt-6 grid max-w-stats divide-y divide-black/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {data.stats.map((stat) => (
            <li key={stat.label} className="px-6 py-6">
              <Icon name={stat.icon} className="mx-auto size-10 text-brand" />
              <p className="mt-1">
                <strong className="block text-h4 font-medium text-brand">
                  {stat.value}
                </strong>
                <span className="text-body">{stat.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
