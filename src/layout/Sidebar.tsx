import React, { useMemo } from 'react'
import { Avatar, Spacer, Image } from '@nextui-org/react'
import Wave from 'react-wavify'
import { Star, AtSign, icons } from 'lucide-react'
import ListBox from '@/components/ListBox'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export interface SidebarProps {
  avatarUrl: string
  about: (string | React.ReactNode)[]
  emails: string[]
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
  emails,
  social,
}) => {
  const t = useTranslations()
  const { theme } = useTheme()
  const contactItems = useMemo(
    () =>
      emails.map((email, i) => ({
        key: i,
        value: email,
        startContent: <AtSign size={16} />,
      })),
    [emails]
  )
  const socialItems = useMemo(
    () =>
      social.map((s) => {
        const Icon = icons[s.icon as keyof typeof icons]
        return {
          value: s.name,
          key: s.link,
          startContent: <Icon size={16} />,
          href: s.link,
          target: '_blank',
        }
      }),
    [social]
  )
  return (
    <div className="relative hidden min-h-screen w-[300px] flex-col bg-slate-500 text-white  dark:bg-slate-900 md:block">
      <div className="flex h-48 w-full items-center justify-center bg-white dark:bg-slate-700">
        <Avatar
          className="mt-32 h-40 w-40"
          classNames={{
            base: theme === 'dark' ? 'space-bg' : 'bg-slate-200',
          }}
          ImgComponent={Image}
          src={avatarUrl}
        />
      </div>
      <Wave
        fill="inherit"
        paused={false}
        className="mt-[-48px] h-24 w-full fill-slate-500 dark:fill-slate-900"
      />
      <div className="p-4">
        {about.map((value, i) => (
          <p
            key={i}
            className="mb-4 text-left text-sm text-slate-100 dark:text-slate-300"
          >
            {value}
          </p>
        ))}
        <Spacer y={8} />
        <h2 className="mb-4 flex items-center text-lg font-bold text-slate-100 dark:text-slate-300">
          <Star size={24} className="mr-2" />
          {t('contact')}
        </h2>
        <ListBox items={contactItems} copiable />

        <Spacer y={8} />
        <h2 className="mb-4 flex items-center text-lg font-bold text-slate-100 dark:text-slate-300">
          <Star size={24} className="mr-2" />
          {t('socialNetworks')}
        </h2>
        <ListBox items={socialItems} />
      </div>
    </div>
  )
}

export default Sidebar
