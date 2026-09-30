import { Icon } from '../Icon'
import { ProductGallery } from '../ProductGallery'

import type { Home } from '@/lib/content'

export function Product({ data }: { data: Home['product'] }) {
  return (
    <section
      aria-labelledby="product-title"
      className="overflow-x-clip pt-14 pb-12 lg:pt-26 lg:pb-16"
    >
      <div className="container-page grid gap-y-10 lg:grid-cols-10 lg:gap-x-6">
        <h2
          id="product-title"
          className="text-center section-title lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:text-left"
        >
          {data.title}
        </h2>

        <div className="lg:col-span-4 lg:col-start-7 lg:row-span-2 lg:row-start-1">
          <ProductGallery gallery={data.gallery} caption={data.caption} />
        </div>

        {/* mobile stacks each point under its icon and rules them off */}
        <ul className="divide-y divide-black/10 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:-ml-2 lg:space-y-5 lg:divide-y-0">
          {data.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-3 py-8 text-center lg:flex-row lg:items-start lg:gap-8.5 lg:py-0 lg:text-left"
            >
              <Icon
                name={item.icon}
                className="size-8 icon-badge bg-surface-warm p-1"
              />
              <div className="max-w-xs lg:max-w-none">
                <h3 className="text-h3 font-medium text-brand">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
