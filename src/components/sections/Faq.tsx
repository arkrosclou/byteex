import type { Home } from '@/lib/content'
import { CollageLayout3 } from '@/components/collages/CollageLayout3'

export function Faq({ data }: { data: Home['faq'] }) {
  return (
    <section aria-labelledby="faq-title" className="pt-22 pb-31">
      <div className="container-page grid gap-y-10 lg:grid-cols-10 lg:gap-x-6">
        <div className="lg:col-span-5 lg:col-start-2 lg:-ml-6">
          <h2 id="faq-title" className="section-title">
            {data.title}
          </h2>

          {/* Native details/summary: the accordion works with no script,
              keyboard included. The first one is open, as in the design. */}
          <ul className="mt-14">
            {data.items.map((item, i) => (
              <li
                key={`${item.question}-${i}`}
                className="border-b border-black/10"
              >
                <details name="faq" open={i === 0} className="group py-5">
                  <summary className="marker-none flex cursor-pointer items-center justify-between gap-4 text-h5 text-brand">
                    {item.question}
                    {/* plus that loses its upright when the row opens */}
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-6 shrink-0"
                    >
                      <path
                        d="M3 12h18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M12 3v18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="group-open:hidden"
                      />
                    </svg>
                  </summary>
                  <p className="mt-1">{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>

        {/* the collage is desktop only in the design */}
        <div className="hidden lg:col-span-4 lg:col-start-7 lg:block lg:px-12">
          <CollageLayout3 images={data.images} />
        </div>
      </div>
    </section>
  )
}
