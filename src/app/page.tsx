import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { AnnouncementBar } from '@/components/sections/AnnouncementBar'
import { AsSeenIn } from '@/components/sections/AsSeenIn'
import { Comfort } from '@/components/sections/Comfort'
import { Faq } from '@/components/sections/Faq'
import { FindSomething } from '@/components/sections/FindSomething'
import { Founder } from '@/components/sections/Founder'
import { GreenImpact } from '@/components/sections/GreenImpact'
import { Hero } from '@/components/sections/Hero'
import { Product } from '@/components/sections/Product'
import { SiteHeader } from '@/components/sections/SiteHeader'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustBar } from '@/components/sections/TrustBar'
import { reader } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const home = await reader.singletons.home.read()
  if (!home) return {}

  return { title: home.meta.title, description: home.meta.description }
}

export default async function HomePage() {
  const [globals, home] = await Promise.all([
    reader.singletons.global.read(),
    reader.singletons.home.read(),
  ])

  if (!globals || !home) notFound()

  return (
    <>
      <AnnouncementBar items={globals.announcement} />
      <SiteHeader logo={globals.logo} />

      <main>
        <Hero data={home.hero} />
        <AsSeenIn data={home.asSeenIn} />
        <Product data={home.product} />
        <Founder data={home.founder} />
        <Comfort data={home.comfort} />
        <Testimonials data={home.testimonials} />
        <Faq data={home.faq} />
        <GreenImpact data={home.greenImpact} />
        <FindSomething data={home.findSomething} />
      </main>

      <TrustBar
        shippingNote={globals.shippingNote}
        payments={globals.payments}
        trustItems={globals.trustItems}
      />
    </>
  )
}
