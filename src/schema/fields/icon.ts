import { fields } from '@keystatic/core'

// The icons ship with the code, normalised to a 24x24 viewBox and
// currentColor, so size and colour are set in CSS. Picking from a fixed
// list rather than uploading a file is what keeps that true.
export const ICONS = [
  { label: 'Cart', value: 'cart' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Energy', value: 'energy' },
  { label: 'Leaf', value: 'leaf' },
  { label: 'Shield', value: 'shield' },
  { label: 'Sun and moon', value: 'sun-moon' },
  { label: 'Truck', value: 'truck' },
  { label: 'Water', value: 'water' },
  { label: 'Waves', value: 'waves' },
] as const

export type IconName = (typeof ICONS)[number]['value']

export function icon(label = 'Icon') {
  return fields.select({
    label,
    options: ICONS,
    defaultValue: 'leaf',
  })
}
