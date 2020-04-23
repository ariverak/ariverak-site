import Head from 'next/head'
import Layout from '@components/Layout'
import Title from '@components/Title'
import Subtitle from '@components/Subtitle'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    padding: '0 200px',
    background: '#ccc9c9'
  }
})

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Ariverak - Curriculum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout 
        components={{
          title: <Title text="juan andrés rivera vargas" />,
          subtitle: <Subtitle text="Ingeniero de software" />,
        }}
        />
      </main>
    </div>
  )
}
