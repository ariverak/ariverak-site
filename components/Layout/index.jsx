import Head from 'next/head'
import { createUseStyles } from 'react-jss'
import LeftCorner from './LeftCorner'

const box = 200;
const boxChild = 100;

const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'inline-flex',
    backgroundColor: 'white',
    padding: '40px 15px'
  },
  top: {
    backgroundColor: '#ededed',
		width: '100%',
    height: 60
  },
  content: {
		width: '100%',
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: 'white',
    borderTopLeftRadius: '10%',
    padding: '10%'
  },
  right: {
    position: 'relative',
		backgroundColor: '#ededed',
		width: 400,
    minHeight: '100vh',
    '& img': {
      position: 'absolute',
      width: 180,
      height: 180,
      top: 60,
      left: 60,
      borderRadius: 20
    }
  }
})

export default function Layout({components}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.right}>
        <LeftCorner />
        <img src="https://avatars3.githubusercontent.com/u/29168528?s=400&u=5513d95e49917ca3c6b070bcdf2a40ecd53ab485&v=4" />
      </div>
      <div style={{width: '100%',backgroundColor: '#ededed'}}>
        <div className={classes.top} />
        <div className={classes.content}>
          {components.title}
          {components.subtitle}
        </div>
      </div>
    </div>
  )
}
