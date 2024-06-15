import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

interface IProps {
  children: React.ReactNode
  messages: AbstractIntlMessages
  locale?: string
}

export function Providers({ children, messages, locale }: IProps) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  )
}
