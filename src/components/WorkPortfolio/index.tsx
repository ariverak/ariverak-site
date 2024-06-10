import React from 'react'
import Layout from '@/layout'

const WorkPortfolio: React.FC = () => {
  return (
    <Layout>
      <Layout.Sidebar
        avatarUrl="/me.png"
        about="Desarrollador de JavaScript apasionado y altamente experimentado, con más de 7 años de experiencia en el diseño y desarrollo de soluciones web innovadoras. Me especializo en la creación de aplicaciones web y móviles de alto rendimiento utilizando ReactJS y tengo un sólido conocimiento del backend a través de NodeJS."
        contact={[
          { key: 'Correo Personal', value: 'jrivera.v@outlook.com' },
          { key: 'Correo Electrónico', value: 'jrivera@abaqus.cl' },
          { key: 'Correo Electrónico', value: 'arivera@smertgroup.com' },
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
        title="Juan Andrés Rivera"
        subtitle="Ingeniero de software"
        avatarUrl="/me.png"
        email="jrivera.v@outlook.com"
        education={[
          {
            university: 'Instituto Profesional AIEP',
            yearsBetween: [2014, 2017],
            career: 'Ingeniería de Ejecución en Informática.',
          },
        ]}
        experience={[
          {
            workplace: 'Abaqus',
            yearsBetween: [2024, 'Actualidad'],
            description: `Ingeniero Fullstack en el equipo de desarrollo de soluciones.`,
            logo: '/companies/abaqus.png',
            link: 'https://abaqus.cl/solutions/',
          },
          {
            workplace: 'Rappi',
            yearsBetween: [2021, 2024],
            description: `Ingeniero frontend en el equipo de inventario de rappi turbo.`,
            logo: '/companies/rappi.png',
            link: 'https://www.rappi.com/',
          },
          {
            workplace: 'SmertGroup',
            yearsBetween: [2021, 'Actualidad'],
            description:
              'Desarrollador del eco sistema de aplicaciones de la empresa.',
            logo: '/companies/smertgroup.png',
            link: 'https://smertgroup.com/',
          },
          {
            workplace: 'Drivetech',
            yearsBetween: [2020, 2021],
            description: `Desarrollador de aplicaciones en tiempo real con React.`,
            logo: '/companies/drivetech.png',
            link: 'https://www.drivetech.pro/',
          },
          {
            workplace: 'Soho',
            yearsBetween: [2019, 2020],
            description: 'Desarrollador fullstack para consultora UX.',
            logo: '/companies/soho.png',
            link: 'https://soho.cl/',
          },
          {
            workplace: 'GroupBI',
            yearsBetween: [2018, 2019],
            description:
              'Encargado de llevar acabo el análisis y desarrollo de aplicaciones web.',
            logo: '/companies/groupbi.png',
          },
          {
            workplace: 'Cooprinsem',
            yearsBetween: [2016, 2017],
            description:
              'Desarrollador de Software para el área agrícola de Osorno.',
            logo: '/companies/cooprinsem.png',
            link: 'https://www.cooprinsem.cl/',
          },
        ]}
      />
    </Layout>
  )
}

export default WorkPortfolio
