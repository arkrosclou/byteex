import Link from 'next/link'

import { Img } from '../Img'

import type { Global } from '@/lib/content'

export function SiteHeader({ logo }: { logo: Global['logo'] }) {
  return (
    <header className="container-page pt-4 lg:pt-8 text-center lg:text-left">
      <Link href="/">
        <Img src={logo.file} alt={logo.alt} />
      </Link>
    </header>
  )
}
