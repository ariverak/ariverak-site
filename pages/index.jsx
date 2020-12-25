import React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import Background from '@components/Background';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ariverak - Curriculum</title>
        <meta name='viewport' content='width=device-width,user-scalable=no' />
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
              { key: 'Correo Electrónico', value: 'jrivera.v@outlook.com' },
            ]}
            social={[
              {
                icon: 'github-square',
                name: 'Github',
                link: 'https://github.com/ariverak',
              },
              {
                icon: 'instagram-square',
                name: 'Instagram',
                link: 'https://www.instagram.com/ariverak',
              },
              {
                icon: 'linkedin',
                name: 'Linkedin',
                link: 'https://www.linkedin.com/in/ariverak/',
              },
            ]}
            title='juan andrés rivera vargas'
            subtitle='Ingeniero de software'
            education={[
              {
                university: 'Instituto Profesional AIEP',
                yearsBetween: [2014, 2017],
                career: 'Ingeniería de Ejecución en Informática.',
              },
            ]}
            experience={[
              {
                workplace: 'Drivetech',
                yearsBetween: [2020, 'Actualidad'],
                description: `Desarrollo de aplicaciones en tiempo real con React.`,
              },
              {
                workplace: 'Soho',
                yearsBetween: [2019, 2020],
                description:
                  'Desarrollador fullstack remoto para importante consultora experta en experiencia de usuario (UX)',
              },
              {
                workplace: 'GroupBI',
                yearsBetween: [2018, 2019],
                description:
                  'Encargado de llevar acabo el análisis y desarrollo de aplicaciones web, creación de bases de datos, API Restfull con NodeJS, maquetación, diseño y programación con ReactJS.',
              },
              {
                workplace: 'Cooprinsem',
                yearsBetween: [2016, 2017],
                description:
                  'Desarrollo de Software para el área agrícola de Osorno',
              },
            ]}
          />
        </Background>
      </main>
    </>
  );
}
