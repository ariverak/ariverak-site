/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { PrinterIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import sleep from 'sleep-promise'

const PrintButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Tooltip
      id="print"
      className="hidden md:block"
      content="Imprimir"
      placement="left"
      closeDelay={0}
    >
      <motion.div
        className="fixed bottom-5 right-10 z-[9999] hidden cursor-pointer md:flex"
        initial={{ opacity: 0.25, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          onClick={async () => {
            const wrapper = document.getElementsByClassName('wrapper')[0]
            wrapper.scrollTo(0, 0)
            const t = theme
            if (t === 'dark') {
              setTheme('light')
              await sleep(200)
              window.print()
              setTheme('dark')
              return
            }
            await sleep(200)
            window.print()
          }}
        >
          <PrinterIcon />
        </Button>
      </motion.div>
    </Tooltip>
  )
}

export default PrintButton
