import { Icon } from '../Icon'
import { Img } from '../Img'

import type { Global } from '@/lib/content'

type Props = Pick<Global, 'shippingNote' | 'payments' | 'trustItems'>

export function TrustBar({ shippingNote, payments, trustItems }: Props) {
  return (
    <footer>
      <p>{shippingNote}</p>
      <Img src={payments.file} alt={payments.alt} />

      <ul>
        {trustItems.map((item) => (
          <li key={item.text}>
            <Icon name={item.icon} className="h-[1em] w-[1em]" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </footer>
  )
}
