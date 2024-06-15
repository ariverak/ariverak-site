import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

const LangSelector = () => {
  const locale = useLocale()
  const router = useRouter()
  const handleLocale = () => {
    setCookie('locale', locale === 'es' ? 'en' : 'es', {
      path: '/',
    })
    router.refresh()
  }
  return (
    <Tooltip
      id="lang-selector"
      className="hidden md:block"
      content={locale === 'es' ? 'Español' : 'English'}
      placement="left"
      closeDelay={0}
    >
      <motion.div
        className="absolute right-4 top-4 z-[9999] hidden cursor-pointer md:flex"
        initial={{ opacity: 0.25, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          onClick={handleLocale}
        >
          {locale === 'es' ? '🇪🇸' : '🇺🇸'}
        </Button>
      </motion.div>
    </Tooltip>
  )
}

export default LangSelector
