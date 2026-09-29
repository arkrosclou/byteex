import cx from 'classnames'

import type { Global } from '@/lib/content'

/* single message for mobile */
const MOBILE_INDEX = 1

export function AnnouncementBar({ items }: { items: Global['announcement'] }) {
  if (items.length === 0) return null

  return (
    <aside
      aria-label="Announcements"
      className="bg-surface-warm text-small text-body"
    >
      <ul className="container-page flex h-9 items-center justify-center">
        {items.map((text, index) => (
          <li
            key={text}
            className={cx('flex items-center', {
              'hidden lg:flex': index !== MOBILE_INDEX,
              // hairline between items
              'before:mx-3.5 before:hidden before:h-2.5 before:w-px before:bg-muted/35 lg:before:block':
                index > 0,
            })}
          >
            {text}
          </li>
        ))}
      </ul>
    </aside>
  )
}
