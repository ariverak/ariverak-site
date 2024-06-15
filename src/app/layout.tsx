import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Providers } from '@/app/providers'
import { getLocale, getMessages } from 'next-intl/server'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Ariverak - Site',
  description: 'Sitio web de Ariverak',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <Providers messages={messages}>{children}</Providers>
      </body>
    </html>
  )
}
