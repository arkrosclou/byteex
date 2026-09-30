'use client'

import cx from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Icon } from './Icon'

type Props = {
  label: string
  className?: string
  /* the track carries the width cap, so the arrows can sit outside it */
  trackClassName?: string
  children: React.ReactNode
}

// A scroll-snap carousel. Touch swipes it, the arrows step it by one
// card, and with javascript off the track still scrolls by hand. The
// cards share the row on desktop, where there is nothing left to page
// through and the arrows go quiet.
export function Slider({ label, className, trackClassName, children }: Props) {
  const track = useRef<HTMLUListElement>(null)
  const [reach, setReach] = useState({ start: true, end: true })

  const measure = useCallback(() => {
    const el = track.current
    if (!el) return
    const slack = el.scrollWidth - el.clientWidth
    setReach({ start: el.scrollLeft < 1, end: el.scrollLeft > slack - 1 })
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const step = (direction: 1 | -1) => {
    const el = track.current
    if (!el) return
    const [first, second] = el.children
    const by = second
      ? (second as HTMLElement).offsetLeft - (first as HTMLElement).offsetLeft
      : el.clientWidth
    el.scrollBy({ left: direction * by, behavior: 'smooth' })
  }

  return (
    <div className={cx('relative', className)}>
      <ul
        ref={track}
        onScroll={measure}
        aria-label={label}
        className={cx('slider-track', trackClassName)}
      >
        {children}
      </ul>

      <button
        type="button"
        aria-label="Previous"
        disabled={reach.start}
        onClick={() => step(-1)}
        className="slider-arrow left-1 rotate-180 lg:-left-6"
      >
        <Icon name="chevron" className="size-full" />
      </button>
      <button
        type="button"
        aria-label="Next"
        disabled={reach.end}
        onClick={() => step(1)}
        className="slider-arrow right-1 lg:-right-4.5"
      >
        <Icon name="chevron" className="size-full" />
      </button>
    </div>
  )
}
