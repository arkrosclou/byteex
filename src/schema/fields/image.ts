import { fields } from '@keystatic/core'

// Keystatic names an upload after the field's own path inside the entry
// — object keys joined by '/', arrays contributing their index. So the
// directory only says which singleton the image belongs to; naming it
// after the section too would put the section in the path twice.
//
// global.logo.file        -> public/images/global/logo/file.svg
// home.hero.images[0].file -> public/images/home/hero/images/0/file.jpg
export function image(label: string, singleton: 'global' | 'home') {
  return fields.image({
    label,
    directory: `public/images/${singleton}`,
    publicPath: `/images/${singleton}/`,
    validation: { isRequired: true },
  })
}

export function altText(label = 'Alt text') {
  return fields.text({ label, validation: { isRequired: true } })
}
