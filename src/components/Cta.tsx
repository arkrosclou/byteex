import { Icon } from './Icon'
import { Stars } from './Stars'

type Props = {
  cta: { label: string; href: string }
  stars?: number
  ratingLabel?: string
}

// The button, and under it the rating line where a section has one.
// Each section passes its own copy — there is no shared entry.
export function Cta({ cta, stars, ratingLabel }: Props) {
  return (
    <div>
      <a href={cta.href}>
        {cta.label}
        <Icon name="arrow" className="h-[1em] w-[1em]" />
      </a>
      {ratingLabel && stars !== undefined && (
        <p>
          <Stars value={stars} />
          <span>{ratingLabel}</span>
        </p>
      )}
    </div>
  )
}
