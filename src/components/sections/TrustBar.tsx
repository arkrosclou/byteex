import { Icon } from '../Icon'
import { Img } from '../Img'

import type { Global } from '@/lib/content'

type Props = Pick<Global, 'shippingNote' | 'payments' | 'trustItems'>

export function TrustBar({ shippingNote, payments, trustItems }: Props) {
  return (
    <footer className="warm-fade-out pt-5 pb-20 text-small">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <p className="flex items-center gap-2 text-success">
            <Icon name="check" className="size-4 shrink-0" />
            {shippingNote}
          </p>
          <Img
            src={payments.file}
            alt={payments.alt}
            sizes="235px"
            className="w-payments object-contain"
          />
        </div>

        <ul className="mx-auto mt-4 grid max-w-trust divide-y divide-black/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {trustItems.map((item) => (
            <li key={item.text} className="flex items-center gap-3 px-5 py-3">
              <Icon
                name={item.icon}
                className="size-8.5 icon-badge bg-surface-cool p-2"
              />
              <span className="leading-tight text-body">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
