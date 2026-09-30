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
        className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-brand px-8 font-button text-white lg:w-cta"
      >
        {cta.label}
        <Icon name="arrow" className="size-[1em]" />
      </a>
      {ratingLabel && stars !== undefined && (
        <p className="mt-3 flex items-center justify-center gap-2 text-small text-muted">
          <Stars value={stars} />
          <span>{ratingLabel}</span>
        </p>
      )}
    </div>
  )
}
