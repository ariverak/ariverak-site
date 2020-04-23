import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	subtitle: {
		fontSize: 20
  }
})

export default function Subtitle({ children }) {
  const classes = useStyles();
  return (
    <h1 className={
      classNames(
        'is-size-5',
        'has-text-weight-medium',
        'has-text-black',
        classes.subtitle)
      }>
        { children }
    </h1>
  )
}
