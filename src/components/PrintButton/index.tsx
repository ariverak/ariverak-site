import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { PrinterIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const PrintButton = () => {
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
          onClick={() => {
            document.getElementsByClassName('wrapper')[0].scrollTo(0, 0)
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
