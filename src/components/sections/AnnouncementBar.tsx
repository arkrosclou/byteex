import type { Global } from '@/lib/content'

export function AnnouncementBar({ items }: { items: Global['announcement'] }) {
  if (items.length === 0) return null

  return (
    <aside aria-label="Announcements" className="text-small">
      <ul>
        {items.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </aside>
  )
}
