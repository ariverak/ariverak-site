import React from 'react';
// import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {}
});

export default function Education({ data }) {
  const classes = useStyles();
  console.log(data);
  return <div className={classes.root} />;
}
