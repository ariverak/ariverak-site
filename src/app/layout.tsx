import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Providers } from '@/app/providers'
import { getLocale, getMessages } from 'next-intl/server'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Juan Andrés Rivera - Software Engineer & Frontend Developer',
    template: '%s | Juan Andrés Rivera'
  },
  description: 'Senior Software Engineer with 8+ years of experience in React, Node.js, and modern web technologies. Currently working at Brikl as Frontend Engineer.',
  keywords: [
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Web Development',
    'Full Stack Developer',
    'Brikl',
    'Rappi',
    'Chile'
  ],
  authors: [{ name: 'Juan Andrés Rivera' }],
  creator: 'Juan Andrés Rivera',
  publisher: 'Juan Andrés Rivera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ariverak.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ariverak.com',
    title: 'Juan Andrés Rivera - Software Engineer & Frontend Developer',
    description: 'Senior Software Engineer with 8+ years of experience in React, Node.js, and modern web technologies. Currently working at Brikl as Frontend Engineer.',
    siteName: 'Juan Andrés Rivera Portfolio',
    images: [
      {
        url: '/me.png',
        width: 1200,
        height: 630,
        alt: 'Juan Andrés Rivera - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Andrés Rivera - Software Engineer & Frontend Developer',
    description: 'Senior Software Engineer with 8+ years of experience in React, Node.js, and modern web technologies.',
    images: ['/me.png'],
    creator: '@ariverak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Juan Andrés Rivera",
              "jobTitle": "Software Engineer",
              "description": "Senior Software Engineer with 8+ years of experience in React, Node.js, and modern web technologies",
              "url": "https://ariverak.com",
              "image": "https://ariverak.com/me.png",
              "email": "jrivera.v@outlook.com",
              "sameAs": [
                "https://github.com/ariverak",
                "https://www.linkedin.com/in/ariverak/",
                "https://www.instagram.com/ariverak"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Brikl",
                "url": "https://brikl.com/"
              },
              "knowsAbout": [
                "React",
                "JavaScript",
                "Node.js",
                "TypeScript",
                "Web Development",
                "Frontend Development",
                "Full Stack Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Professional Institute AIEP",
                "url": "https://www.aiep.cl/"
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'Juan Andrés Rivera - Software Engineer',
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <Providers messages={messages}>{children}</Providers>
      </body>
    </html>
  )
}
