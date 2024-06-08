import type { Metadata } from 'next'
// app/layout.tsx
import { Providers } from './providers'
import '@/styles/globals.css'

/* <title>Ariverak - Curriculum</title>
<meta name='viewport' content='width=device-width, initial-scale=1' />
<meta property='og:image' content='/juan-rivera-vargas.jpg' />
<meta
  name='og:title'
  property='og:title'
  content='Juan Rivera Vargas'
/>
<meta
  name='og:description'
  property='og:description'
  content='Este curriculum esta hecho 100% a mano :)'
/>
<link rel='icon' href='/favicon.ico' /> */

export const metadata: Metadata = {
  title: 'Ariverak - Curriculum',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    images: ['/juan-rivera-vargas.jpg'],
    title: 'Juan Rivera Vargas'
  },
  description: 'Este curriculum esta hecho 100% a mano :)'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const theme = 'light'
  return (
    <html lang='es' className={theme}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
