import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hi, Hafid 👋🏻',
  description: 'Hafid Ikhsan Arifin Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-950 text-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
