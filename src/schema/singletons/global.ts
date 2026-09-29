import { fields, singleton } from '@keystatic/core'

import { altText, image } from '../fields/image'
import { icon } from '../fields/icon'

// Everything that is not home page copy: the announcement bar, the
// logo, and the trust row that closes the page.
export const global = singleton({
  label: 'Global',
  path: 'content/global',
  format: { data: 'json' },
  schema: {
    announcement: fields.array(
      fields.text({ label: 'Message', validation: { isRequired: true } }),
      {
        label: 'Announcement bar',
        description: 'Three on desktop, only the first one on mobile.',
        itemLabel: (props) => props.value || 'Message',
      }
    ),

    logo: fields.object(
      {
        file: image('File', 'global'),
        alt: altText(),
      },
      { label: 'Logo' }
    ),

    shippingNote: fields.text({
      label: 'Shipping note',
      description: 'Sits next to the payment icons.',
      validation: { isRequired: true },
    }),

    // One combined image, the way the design has it, rather than nine
    // separate marks. The card brands are fixed and never restyled.
    payments: fields.object(
      {
        file: image('Image', 'global'),
        alt: altText(),
      },
      { label: 'Payment icons' }
    ),

    trustItems: fields.array(
      fields.object({
        icon: icon(),
        text: fields.text({
          label: 'Text',
          multiline: true,
          validation: { isRequired: true },
        }),
      }),
      {
        label: 'Trust row',
        itemLabel: (props) => props.fields.text.value || 'Item',
      }
    ),
  },
})
