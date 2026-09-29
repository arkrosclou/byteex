import { Icon } from './Icon'

const POSITIONS = [0, 1, 2, 3, 4]

// Five stars with the score painted over them. The filled row is the
// same five stars clipped to a percentage of the width, so 4.5 fills
// four and a half and any other fraction works the same way. Stars take
// their size from the font size of whatever contains them.
export function Stars({ value }: { value: number }) {
  const score = Math.min(5, Math.max(0, value))
  const row = POSITIONS.map((i) => (
    <Icon key={i} name="star" className="h-[1em] w-[1em] shrink-0" />
  ))

  return (
    <span
      role="img"
      aria-label={`Rated ${score} out of 5`}
      className="relative inline-flex"
    >
      <span aria-hidden="true" className="inline-flex opacity-25">
        {row}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-flex h-full overflow-hidden"
        style={{ width: `${(score / 5) * 100}%` }}
      >
        {row}
      </span>
    </span>
  )
}
