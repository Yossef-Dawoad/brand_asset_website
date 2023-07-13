import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  //[TODO] SEO OPTIMIZATION 
  title: 'Startup Booster | AI Generated Marketings',
  description: 'Create a powerful start-up branding campaign with creative names, catchy taglines, relevant keywords and profitable revenue streams for your business or product',
  icons: ['/favicon.ico'],

  // adding og for better meta with social media integrations 
  openGraph: {
    siteName: 'Startup Booster',
    title: 'Startup Booster--AI Generated Marketing Campaign',
    url: 'https://startupbooster-theta.vercel.app',
    description: 'Create a powerful start-up branding campaign with creative names, catchy taglines, relevant keywords and profitable revenue streams for your business or product',
    tags: ['AI', 'LLM', 'ChatGPT', 'Start-UP', 'Boost', 'AI-Generated'],
    images: [{
      url: "/favicon.ico",
    }],
  }
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
