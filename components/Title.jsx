import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  '@keyframes fadeAnimation': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  title: {
    fontWeight: '400',
    fontSize: 60,
    animation: '$fadeAnimation 4000ms',
  },
});

function Title({ children }) {
  const classes = useStyles();
  return (
    <h1 className={classNames('has-text-black', 'is-uppercase', classes.title)}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
