import Head from 'next/head'
import Layout from '@components/Layout'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    padding: '0 200px',
    background: '#ccc9c9',
    '@media (max-width: 1024px)': {
      padding: 0
    }
  }
})

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Ariverak - Curriculum</title>
        <meta name="viewport" content="width=device-width;user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout
        imageUrl="https://avatars3.githubusercontent.com/u/29168528?s=400&u=5513d95e49917ca3c6b070bcdf2a40ecd53ab485&v=4"
        about={`
          Soy una persona pro activa, me gustan las nuevas tecnologías y los desafíos, e desarrollado variadas soluciones de software desde aplicaciones móviles, web y servicios backend, me desenvuelvo muy bien en el frontend como en el backend.
          No obstante siempre estoy aprendiendo cosas nuevas.        
        `}
        title="juan andrés rivera vargas"
        subtitle="Ingeniero de software"
        education={[
          {
            yearsBetween : [ 2014, 2017 ],

          }
        ]}
        />
      </main>
    </div>
  )
}
