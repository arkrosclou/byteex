import { Icon } from '../Icon'
import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function Product({ data }: { data: Home['product'] }) {
  return (
    <section aria-labelledby="product-title">
      <h2 id="product-title" className="text-h2 text-brand">
        {data.title}
      </h2>

      <ul>
        {data.items.map((item) => (
          <li key={item.title}>
            <Icon name={item.icon} className="h-[1em] w-[1em] text-brand" />
            <h3 className="text-h3 text-brand">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      <figure>
        <ul>
          {data.gallery.map((image) => (
            <li key={image.file}>
              <Img src={image.file} alt={image.alt} />
            </li>
          ))}
        </ul>
        <figcaption className="text-small text-muted">
          {data.caption}
        </figcaption>
      </figure>
    </section>
  )
}
