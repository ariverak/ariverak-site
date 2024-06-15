import React from 'react'
import { useTheme } from 'next-themes'
import { Button, Tooltip } from '@nextui-org/react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Tooltip
      id="theme-switcher"
      className="hidden md:block"
      content={theme === 'dark' ? 'Light' : 'Dark'}
      placement="left"
      closeDelay={0}
    >
      <motion.div
        className="fixed bottom-20 right-10 z-[9999] hidden cursor-pointer md:flex"
        initial={{ opacity: 0.25, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
      </motion.div>
    </Tooltip>
  )
}

export default ThemeSelector
