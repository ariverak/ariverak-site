import React from 'react'
import Head from 'next/head'
import Layout from '@components/Layout'
import Background from '@components/Background'
import WhatsAppWidget from 'react-whatsapp-widget'

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
              Soy una persona pro activa, me gustan las nuevas tecnologías y los desafíos.
              En mi corta carrera e desarrollado variadas soluciones de software desde aplicaciones móviles, web y desarrollo backend.
              No obstante siempre intento estar a la vanguardia aprendiendo cosas nuevas.        
            `}
            contact={[
              { key: 'Correo Personal', value: 'jrivera.v@outlook.com' },
              { key: 'Correo Electrónico', value: 'andres.rivera@rappi.com' }
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
                workplace: 'Rappi',
                yearsBetween: [2021, 'Actualidad'],
                description: `Ingeniero frontend en rappi turbo`,
                logo: '/companies/rappi.png',
                link: 'https://www.rappi.com/'
              },
              {
                workplace: 'Drivetech',
                yearsBetween: [2020, 2021],
                description: `Desarrollo de aplicaciones en tiempo real con React.`,
                logo: '/companies/drivetech.png',
                link: 'https://www.drivetech.pro/'
              },
              {
                workplace: 'Soho',
                yearsBetween: [2019, 2020],
                description:
                  'Desarrollador fullstack remoto para importante consultora experta en experiencia de usuario (UX)',
                logo: '/companies/soho.png',
                link: 'https://soho.cl/'
              },
              {
                workplace: 'GroupBI',
                yearsBetween: [2018, 2019],
                description:
                  'Encargado de llevar acabo el análisis y desarrollo de aplicaciones web, creación de bases de datos, API Restfull con NodeJS, maquetación, diseño y programación con ReactJS.',
                logo: '/companies/groupbi.png'
              },
              {
                workplace: 'Cooprinsem',
                yearsBetween: [2016, 2017],
                description:
                  'Desarrollo de Software para el área agrícola de Osorno',
                logo: '/companies/cooprinsem.png',
                link: 'https://www.cooprinsem.cl/'
              }
            ]}
          />
        </Background>
        <WhatsAppWidget
          sendButton='Enviar'
          companyName='ariverak'
          message='Hola, si quires contactarme, enviame un mensaje.'
          textReplyTime='En Linea'
          phoneNumber='+56965142583'
        />
      </main>
    </>
  )
}
