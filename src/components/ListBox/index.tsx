import React, { useState } from 'react'
import {
  ListboxItem,
  Tooltip,
  ListboxItemProps,
  Listbox as NextUIListbox,
  ListboxProps,
} from '@nextui-org/react'
import debounce from 'lodash.debounce'

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

  const setCopied = debounce(() => {
    setItemCopied(undefined)
  }, 2000)

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
              setItemCopied(index)
              setCopied()
            }
            item.onClick && item.onClick(e)
          }}
        >
          <ValueWrapper index={index}>{item.value}</ValueWrapper>
        </ListboxItem>
      ))}
    </NextUIListbox>
  )
}

export default ListBox
