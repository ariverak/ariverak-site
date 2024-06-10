import React from 'react'
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react'
import Sidebar, { SidebarProps } from './Sidebar'
import Content, { ContentProps } from './Content'
import { PrinterIcon } from 'lucide-react'

interface LayoutProps {
  enablePrint?: boolean
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> & {
  Sidebar: React.FC<SidebarProps>
  Content: React.FC<ContentProps>
} = ({ children, enablePrint }) => {
  return (
    <>
      <Modal
        size="5xl"
        isOpen
        backdrop="transparent"
        hideCloseButton
        placement="top"
        className="m-0 !rounded-none sm:!mt-4 md:!rounded-lg"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 1,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent className="border-large border-slate-400">
          <ModalBody className="flex-row">
            {children}
            {enablePrint && (
              <Button
                id="print"
                isIconOnly
                color="warning"
                variant="faded"
                className="z-100 fixed bottom-5 right-10 hidden cursor-pointer md:flex"
                onClick={() => window.print()}
              >
                <PrinterIcon />
              </Button>
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  )
}

Layout.Sidebar = Sidebar
Layout.Content = Content

export default Layout
