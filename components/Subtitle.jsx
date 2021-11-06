import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
});

function Subtitle({ children }) {
  const classes = useStyles();
  return (
    <h1
      className={classNames(
        'is-size-5',
        'is-size-6-mobile',
        'has-text-weight-medium',
        'has-text-black',
        classes.subtitle
      )}
    >
      {children}
    </h1>
  );
}

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
