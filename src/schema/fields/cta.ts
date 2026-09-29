import { fields } from '@keystatic/core'

// Each section that shows a call to action owns its own copy of it.
// This only saves the retyping in the schema — the content files still
// carry one CTA per section, so a section can be read on its own.
export function cta(label = 'Call to action') {
  return fields.object(
    {
      label: fields.text({
        label: 'Button text',
        validation: { isRequired: true },
      }),
      href: fields.text({
        label: 'Link',
        validation: { isRequired: true },
      }),
    },
    { label, layout: [6, 6] }
  )
}

// A score, not a picture of one: the component fills five stars from
// this number and partially fills the last one, so 4.5 renders as four
// and a half.
export function stars(label = 'Stars') {
  return fields.number({
    label,
    description: 'From 0 to 5. Fractions are allowed, for example 4.5.',
    defaultValue: 5,
    validation: { isRequired: true, min: 0, max: 5 },
  })
}

// The text beside the stars. Only three of the five CTAs show one.
export function ratingLabel() {
  return fields.text({
    label: 'Rating text',
    description: 'Sits next to the stars, under the button.',
    validation: { isRequired: true },
  })
}
