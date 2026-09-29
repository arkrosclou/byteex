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
        file: image('File', 'brand'),
        alt: altText(),
      },
      { label: 'Logo' }
    ),

    shippingNote: fields.text({
      label: 'Shipping note',
      description: 'Sits next to the payment icons.',
      validation: { isRequired: true },
    }),

    payments: fields.array(
      fields.object({
        file: image('Icon', 'payments'),
        alt: altText(),
      }),
      {
        label: 'Payment icons',
        itemLabel: (props) => props.fields.alt.value || 'Icon',
      }
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
