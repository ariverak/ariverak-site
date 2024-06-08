import React from 'react'
import Head from 'next/head'
import Layout from '@components/Layout'
import Background from '@components/Background'
// import WhatsAppWidget from 'react-whatsapp-widget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ariverak - Curriculum</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/juan-rivera-vargas.jpg' />
        <meta
          name='og:title'
          property='og:title'
          content='Juan Rivera Vargas'
        />
        <meta
          name='og:description'
          property='og:description'
          content='Este curriculum esta hecho 100% a mano :)'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Background>
          <Layout
            imageUrl='/me.png'
            about={`
            Desarrollador de JavaScript apasionado y altamente experimentado, con más de 7 años de experiencia en el diseño y desarrollo de soluciones web innovadoras. Me especializo en la creación de aplicaciones web y móviles de alto rendimiento utilizando ReactJS y tengo un sólido conocimiento del backend a través de NodeJS.        
            `}
            contact={[
              { key: 'Correo Personal', value: 'jrivera.v@outlook.com' },
              { key: 'Correo Electrónico', value: 'jrivera@abaqus.cl' },
              { key: 'Correo Electrónico', value: 'arivera@smertgroup.com' }
            ]}
            social={[
              {
                icon: 'github-square',
                name: 'Github',
                link: 'https://github.com/ariverak'
              },
              {
                icon: 'instagram-square',
                name: 'Instagram',
                link: 'https://www.instagram.com/ariverak'
              },
              {
                icon: 'linkedin',
                name: 'Linkedin',
                link: 'https://www.linkedin.com/in/ariverak/'
              }
            ]}
            title='juan andrés rivera'
            subtitle='Ingeniero de software'
            education={[
              {
                university: 'Instituto Profesional AIEP',
                yearsBetween: [2014, 2017],
                career: 'Ingeniería de Ejecución en Informática.'
              }
            ]}
            experience={[
              {
                workplace: 'Abaqus',
                yearsBetween: [2024, 'Actualidad'],
                description: `Ingeniero Fullstack en el equipo de desarrollo de soluciones.`,
                logo: '/companies/abaqus.png',
                link: 'https://abaqus.cl/solutions/'
              },
              {
                workplace: 'Rappi',
                yearsBetween: [2021, 2024],
                description: `Ingeniero frontend en el equipo de inventario de rappi turbo.`,
                logo: '/companies/rappi.png',
                link: 'https://www.rappi.com/'
              },
              {
                workplace: 'SmertGroup',
                yearsBetween: [2021, 'Actualidad'],
                description:
                  'Desarrollador del eco sistema de aplicaciones de la empresa.',
                logo: '/companies/smertgroup.png',
                link: 'https://smertgroup.com/'
              },
              {
                workplace: 'Drivetech',
                yearsBetween: [2020, 2021],
                description: `Desarrollador de aplicaciones en tiempo real con React.`,
                logo: '/companies/drivetech.png',
                link: 'https://www.drivetech.pro/'
              },
              {
                workplace: 'Soho',
                yearsBetween: [2019, 2020],
                description: 'Desarrollador fullstack para consultora UX.',
                logo: '/companies/soho.png',
                link: 'https://soho.cl/'
              },
              {
                workplace: 'GroupBI',
                yearsBetween: [2018, 2019],
                description:
                  'Encargado de llevar acabo el análisis y desarrollo de aplicaciones web.',
                logo: '/companies/groupbi.png'
              },
              {
                workplace: 'Cooprinsem',
                yearsBetween: [2016, 2017],
                description:
                  'Desarrollador de Software para el área agrícola de Osorno.',
                logo: '/companies/cooprinsem.png',
                link: 'https://www.cooprinsem.cl/'
              }
            ]}
          />
        </Background>
        {/* <WhatsAppWidget
          sendButton='Enviar'
          companyName='ariverak'
          message='Hola, si quires contactarme, enviame un mensaje.'
          textReplyTime='En Linea'
          phoneNumber='xxxxxxxxxx'
        /> */}
      </main>
    </>
  )
}
