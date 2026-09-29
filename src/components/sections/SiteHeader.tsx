import Link from 'next/link'

import { Img } from '../Img'

import type { Global } from '@/lib/content'

export function SiteHeader({ logo }: { logo: Global['logo'] }) {
  return (
    <header>
      <Link href="/">
        <Img src={logo.file} alt={logo.alt} />
      </Link>
    </header>
  )
}
