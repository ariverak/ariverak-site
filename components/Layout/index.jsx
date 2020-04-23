import Title from '@components/Title'
import Subtitle from '@components/Subtitle'
import Education from '@components/Education'
import { createUseStyles } from 'react-jss'
import LeftCorner from './LeftCorner'

const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'inline-flex',
    backgroundColor: 'white',
    padding: '40px 15px',
    zIndex: 1000
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
    },
    '& $about': {
      marginTop: 65,
      margin: 20,
      '& p': {
        marginBottom: 20
      }
    }
  },
  about:{}
})

export default function Layout({ imageUrl, about, title, subtitle, education }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.right}>
        <LeftCorner />
        <img src={imageUrl} />
        <div className={classes.about}>
          <p className="has-text-info is-size-4 has-text-weight-medium">SOBRE MI</p>
          <p className="has-text-left is-size-7">
            { about }
          </p>
        </div>
      </div>
      <div style={{width: '100%',backgroundColor: '#ededed'}}>
        <div className={classes.top} />
        <div className={classes.content}>
          <Title>{ title }</Title>
          <Subtitle>{ subtitle }</Subtitle>
          <Education data={education} />
        </div>
      </div>
    </div>
  )
}
