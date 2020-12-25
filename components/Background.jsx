import React from 'react';
import Particles from 'react-particles-js';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import particlesConfig from '@config/particles.json';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  root: {
    padding: '0 200px',
    background: '#232741',
    '@media (max-width: 1024px)': {
      padding: 0,
    },
  },
  particles: {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
function Background({ children }) {
  const classes = useStyles();
  return (
    <div className={classNames('is-relative', classes.root)}>
      <Particles className={classes.particles} params={particlesConfig} />
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
