import { fields } from '@keystatic/core'

// Uploads land in public/images/<section>/ and are referenced from the
// content file by the URL path, which is what next/image needs.
export function image(label: string, section: string) {
  return fields.image({
    label,
    directory: `public/images/${section}`,
    publicPath: `/images/${section}/`,
    validation: { isRequired: true },
  })
}

export function altText(label = 'Alt text') {
  return fields.text({ label, validation: { isRequired: true } })
}
