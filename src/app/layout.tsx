import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aribnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
