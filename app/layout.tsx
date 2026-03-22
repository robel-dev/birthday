import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roseFavicon = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="52">&#x1F339;</text>
  </svg>`
)}`

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
})

const inter = Manrope({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Happy birthday Hiyabye!',
  description: 'A special birthday journey made with love',
  icons: {
    icon: roseFavicon,
    shortcut: roseFavicon,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
