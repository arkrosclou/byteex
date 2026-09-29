import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

// Outfit stands in for Sofia Pro, Inter for Suisse Int'l. Both of the
// originals are commercial, see the readme.
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

// Fallback for routes that do not read the cms, such as the admin.
// The home page sets its own from the content file.
export const metadata: Metadata = {
  title: 'Byteex',
  description: 'Consciously made butter soft staples for every day.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
