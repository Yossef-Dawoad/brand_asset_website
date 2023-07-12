// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Startup Booster | AI Generated Marketings',
  description: 'Create a powerful start-up branding campaign with creative names, catchy taglines, relevant keywords and profitable revenue streams for your business or product',       
  icons: ['/favicon.ico']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
