import { Icon } from './Icon'
import { Stars } from './Stars'

type Props = {
  cta: { label: string; href: string }
  stars?: number
  ratingLabel?: string
  className?: string
}

// The button, and under it the rating line where a section has one.
// Each section passes its own copy — there is no shared entry.
export function Cta({ cta, stars, ratingLabel, className }: Props) {
  return (
    <div className={className}>
      <a
        href={cta.href}
        className="bg-brand font-button inline-flex h-14 items-center justify-center gap-3 rounded-md px-8 text-white"
      >
        {cta.label}
        <Icon name="arrow" className="h-[1em] w-[1em]" />
      </a>
      {ratingLabel && stars !== undefined && (
        <p className="text-small text-muted mt-3 flex items-center justify-center gap-2">
          <Stars value={stars} />
          <span>{ratingLabel}</span>
        </p>
      )}
    </div>
  )
}
