import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	subtitle: {
		fontSize: 20,
    fontWeight: '300',
  }
})

export default function Subtitle({text}) {
  const classes = useStyles();
  return (
    <h1 className={classNames('is-size-4','is-italic','has-text-black',classes.subtitle)}>
        { text }
    </h1>
  )
}
