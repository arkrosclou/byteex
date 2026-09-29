import type { Global } from '@/lib/content'

export function AnnouncementBar({ items }: { items: Global['announcement'] }) {
  if (items.length === 0) return null

  return (
    <aside
      aria-label="Announcements"
      className="bg-surface-warm text-small text-brand"
    >
      <ul>
        {items.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </aside>
  )
}
