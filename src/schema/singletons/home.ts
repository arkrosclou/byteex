import { fields, singleton } from '@keystatic/core'

import { altText, image } from '../fields/image'
import { cta, ratingLabel, stars } from '../fields/cta'
import { icon } from '../fields/icon'

const title = () =>
  fields.text({ label: 'Title', validation: { isRequired: true } })

const body = (label = 'Text') =>
  fields.text({ label, multiline: true, validation: { isRequired: true } })

// One fields.object per section of the page, keyed the way the template
// looks them up. Sections that show a button carry their own.
export const home = singleton({
  label: 'Home page',
  path: 'content/home',
  format: { data: 'json' },
  schema: {
    meta: fields.object(
      {
        title: title(),
        description: body('Description'),
      },
      { label: 'Search engines and browser tab' }
    ),

    hero: fields.object(
      {
        title: title(),
        bullets: fields.array(fields.object({ icon: icon(), text: body() }), {
          label: 'Bullets',
          itemLabel: (props) => props.fields.text.value || 'Bullet',
        }),
        cta: cta(),
        review: fields.object(
          {
            avatar: image('Photo', 'home'),
            name: fields.text({
              label: 'Name',
              validation: { isRequired: true },
            }),
            stars: stars(),
            ratingLabel: ratingLabel(),
            text: body(),
          },
          { label: 'Review card' }
        ),
        images: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Collage',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
      },
      { label: 'Hero' }
    ),

    asSeenIn: fields.object(
      {
        label: fields.text({
          label: 'Label',
          validation: { isRequired: true },
        }),
        logos: fields.array(
          fields.object({ file: image('Logo', 'home'), alt: altText() }),
          {
            label: 'Press logos',
            itemLabel: (props) => props.fields.alt.value || 'Logo',
          }
        ),
      },
      { label: 'As seen in' }
    ),

    product: fields.object(
      {
        title: title(),
        items: fields.array(
          fields.object({ icon: icon(), title: title(), text: body() }),
          {
            label: 'Points',
            itemLabel: (props) => props.fields.title.value || 'Point',
          }
        ),
        gallery: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Gallery',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
        caption: fields.text({
          label: 'Caption',
          description: 'Sits under the gallery.',
          validation: { isRequired: true },
        }),
      },
      { label: 'Loungewear you can be proud of' }
    ),

    founder: fields.object(
      {
        title: title(),
        paragraphs: fields.array(body('Paragraph'), {
          label: 'Text',
          itemLabel: (props) => props.value || 'Paragraph',
        }),
        images: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Collage',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
        cta: cta(),
      },
      { label: 'Be your best self' }
    ),

    comfort: fields.object(
      {
        title: title(),
        cards: fields.array(
          fields.object({ icon: icon(), title: title(), text: body() }),
          {
            label: 'Cards',
            itemLabel: (props) => props.fields.title.value || 'Card',
          }
        ),
        cta: cta(),
        stars: stars(),
        ratingLabel: ratingLabel(),
      },
      { label: 'Comfort made easy' }
    ),

    testimonials: fields.object(
      {
        title: title(),
        lead: body('Lead'),
        strip: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Photo strip',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
        items: fields.array(
          fields.object({
            name: fields.text({
              label: 'Name',
              validation: { isRequired: true },
            }),
            stars: stars(),
            text: body(),
          }),
          {
            label: 'Reviews',
            itemLabel: (props) => props.fields.name.value || 'Review',
          }
        ),
        cta: cta(),
        stars: stars(),
        ratingLabel: ratingLabel(),
      },
      { label: 'What are our fans saying' }
    ),

    faq: fields.object(
      {
        title: title(),
        items: fields.array(
          fields.object({
            question: fields.text({
              label: 'Question',
              validation: { isRequired: true },
            }),
            answer: body('Answer'),
          }),
          {
            label: 'Questions',
            itemLabel: (props) => props.fields.question.value || 'Question',
          }
        ),
        images: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Collage',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
      },
      { label: 'Frequently asked questions' }
    ),

    greenImpact: fields.object(
      {
        title: title(),
        stats: fields.array(
          fields.object({
            icon: icon(),
            value: fields.text({
              label: 'Value',
              validation: { isRequired: true },
            }),
            label: fields.text({
              label: 'Label',
              validation: { isRequired: true },
            }),
          }),
          {
            label: 'Numbers',
            itemLabel: (props) => props.fields.value.value || 'Number',
          }
        ),
      },
      { label: 'Our total green impact' }
    ),

    findSomething: fields.object(
      {
        title: title(),
        lead: body('Lead'),
        images: fields.array(
          fields.object({ file: image('Image', 'home'), alt: altText() }),
          {
            label: 'Collage',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
        cta: cta(),
        stars: stars(),
        ratingLabel: ratingLabel(),
      },
      { label: 'Find something you love' }
    ),
  },
})
