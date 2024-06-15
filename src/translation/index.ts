import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookie = cookies().get('locale')
  const locale = cookie?.value || 'es'
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
