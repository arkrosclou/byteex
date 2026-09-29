import { Img } from '../Img'

import type { Home } from '@/lib/content'

export function Faq({ data }: { data: Home['faq'] }) {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-h2">
        {data.title}
      </h2>

      {/* Native details/summary: the accordion works with no script,
          keyboard included. The first one is open, as in the design. */}
      <ul>
        {data.items.map((item, i) => (
          <li key={`${item.question}-${i}`}>
            <details name="faq" open={i === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>

      <ul>
        {data.images.map((image) => (
          <li key={image.file}>
            <Img src={image.file} alt={image.alt} />
          </li>
        ))}
      </ul>
    </section>
  )
}
