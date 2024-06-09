import React from 'react'
import { Avatar, Spacer, Listbox, ListboxItem } from '@nextui-org/react'
import Wave from 'react-wavify'
import { Star, AtSign, icons } from 'lucide-react'

import { slate } from 'tailwindcss/colors'

export interface SidebarProps {
  avatarUrl: string
  about: string
  contact: { key: string; value: string }[]
  social: { icon: string; name: string; link: string }[]
}

export const ListboxWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div className="w-full max-w-[260px] rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100">
    {children}
  </div>
)

const Sidebar: React.FC<SidebarProps> = ({
  avatarUrl,
  about,
  contact,
  social,
}) => {
  return (
    <div className="relative hidden min-h-screen w-[300px] flex-col bg-slate-400 text-white md:block">
      <div className="flex h-48 w-full items-center justify-center bg-white">
        <Avatar
          className="mt-32 h-40 w-40"
          classNames={{
            base: 'bg-white',
          }}
          src={avatarUrl}
        />
      </div>
      <Wave
        fill={slate[400]}
        paused={false}
        className="mt-[-48px] h-24 w-full"
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
      <div className="p-4">
        <p className="text-slate-10 text-left text-sm">{about}</p>
        <Spacer y={8} />
        <h2 className="mb-4 flex items-center text-lg font-bold">
          <Star size={24} className="mr-2" />
          Contacto
        </h2>
        <Listbox className="p-0">
          {contact.map((item, index) => (
            <ListboxItem
              key={index}
              value={item.key}
              startContent={<AtSign size={16} />}
            >
              {item.value}
            </ListboxItem>
          ))}
        </Listbox>
        <Spacer y={8} />
        <h2 className="mb-4 flex items-center text-lg font-bold">
          <Star size={24} className="mr-2" />
          Redes Sociales
        </h2>
        <Listbox className="p-0">
          {social.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <ListboxItem
                key={index}
                value={item.name}
                startContent={<Icon size={16} />}
              >
                {item.name}
              </ListboxItem>
            )
          })}
        </Listbox>
      </div>
    </div>
  )
}

export default Sidebar
