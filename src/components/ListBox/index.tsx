import React, { useRef, useState } from 'react'
import {
  ListboxItem,
  Tooltip,
  ListboxItemProps,
  Listbox as NextUIListbox,
  ListboxProps,
} from '@nextui-org/react'

export interface Props {
  items: ListboxItemProps[]
  copiable?: boolean
}

export const ListBox: React.FC<Partial<ListboxProps> & Props> = ({
  items,
  copiable,
  ...props
}) => {
  const [itemCopied, setItemCopied] = useState<React.Key | undefined>()
  const timeoutRef = useRef<number | undefined>(undefined)

  const handleSetCopied = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setItemCopied(index)
    timeoutRef.current = window.setTimeout(() => {
      setItemCopied(undefined)
    }, 1000)
  }

  const ValueWrapper: React.FC<React.PropsWithChildren & { index: number }> = ({
    children,
    index,
  }) =>
    copiable ? (
      <Tooltip
        placement="right"
        isOpen={itemCopied === index}
        content="Copiado!"
        motionProps={{
          initial: { x: 0 },
          animate: { x: -65 },
        }}
      >
        {children}
      </Tooltip>
    ) : (
      <>{children}</>
    )

  return (
    <NextUIListbox className="p-0" {...props}>
      {items.map((item, index) => (
        <ListboxItem
          {...item}
          key={index}
          onClick={(e) => {
            if (copiable) {
              navigator.clipboard.writeText(item.value?.toLocaleString() || '')
              handleSetCopied(index)
            }
            item.onClick && item.onClick(e)
          }}
          className="text-slate-100 dark:text-slate-300"
        >
          <ValueWrapper index={index}>{item.value}</ValueWrapper>
        </ListboxItem>
      ))}
    </NextUIListbox>
  )
}

export default ListBox
