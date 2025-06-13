import React from 'react'
import Layout from '@/layout'
import { useTranslations } from 'next-intl'

const WorkPortfolio: React.FC = () => {
  const t = useTranslations()
  return (
    <Layout>
      <Layout.Sidebar
        avatarUrl="/me.png"
        about={[
          t.rich('aboutP1', {
            b: (children) => (
              <span className="font-bold text-white">{children}</span>
            ),
            text: () => new Date().getFullYear() - 2016,
          }),
          t('aboutP2'),
        ]}
        emails={[
          'jrivera.v@outlook.com',
        ]}
        social={[
          {
            icon: 'Github',
            name: 'Github',
            link: 'https://github.com/ariverak',
          },
          {
            icon: 'Linkedin',
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/ariverak/',
          },
          {
            icon: 'Instagram',
            name: 'Instagram',
            link: 'https://www.instagram.com/ariverak',
          },
        ]}
      />
      <Layout.Content
        title={t('title')}
        subtitle={t('subtitle')}
        avatarUrl="/me.png"
        email="jrivera.v@outlook.com"
        education={[
          {
            university: t('education.university'),
            yearsBetween: [2014, 2017],
            career: t('education.career'),
          },
        ]}
        experience={[
          {
            workplace: 'Rappi',
            yearsBetween: [2021, 2024],
            description: t('experience.rappi'),
            logo: '/companies/rappi.png',
            link: 'https://www.rappi.com/',
          },

          {
            workplace: 'Drivetech',
            yearsBetween: [2020, 2021],
            description: t('experience.drivetech'),
            logo: '/companies/drivetech.png',
            link: 'https://www.drivetech.pro/',
          },
          {
            workplace: 'Soho',
            yearsBetween: [2019, 2020],
            description: t('experience.soho'),
            logo: '/companies/soho.png',
            link: 'https://soho.cl/',
          },
          {
            workplace: 'GroupBI',
            yearsBetween: [2018, 2019],
            description: t('experience.groupbi'),
            logo: '/companies/groupbi.png',
          },
          {
            workplace: 'Cooprinsem',
            yearsBetween: [2016, 2017],
            description: t('experience.cooprinsem'),
            logo: '/companies/cooprinsem.png',
            link: 'https://www.cooprinsem.cl/',
          },
        ]}
      />
    </Layout>
  )
}

export default WorkPortfolio
