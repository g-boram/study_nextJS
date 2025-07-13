import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextLayout } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Boram's App",
  description: 'Study by next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextLayout>{children}</NextLayout>
      </body>
    </html>
  )
}
