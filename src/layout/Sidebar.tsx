import { Avatar } from '@nextui-org/react'
import React from 'react'
import Wave from 'react-wavify'
import { slate } from 'tailwindcss/colors'

export interface SidebarProps {
  avatarUrl: string
}

const Sidebar: React.FC<SidebarProps> = ({ avatarUrl }) => {
  return (
    <div className={`relative min-h-screen w-[300px] bg-slate-400 text-white`}>
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
    </div>
  )
}

export default Sidebar
