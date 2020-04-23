import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    fontWeight: '400',
    fontSize: 60
  }
});

export default function Title({ children }) {
  const classes = useStyles();
  return (
    <h1 className={classNames('has-text-black', 'is-uppercase', classes.title)}>
      {children}
    </h1>
  );
}
