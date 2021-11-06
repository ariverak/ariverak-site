import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

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

export const Image = ({ imageUrl, className }) => (
  <motion.img
    alt=''
    className={className}
    src={imageUrl}
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.8 }}
    whileTap={{ scale: 1.5 }}
    style={{ width: 40, height: 40, borderRadius: '50%' }}
  />
);

Image.propTypes = {
  imageUrl: PropTypes.string,
  className: PropTypes.string,
};

function Title({ children, imageUrl }) {
  const classes = useStyles();
  return (
    <div
      className='is-flex'
      style={{ alignItems: 'center', justifyContent: 'space-between' }}
    >
      <h1
        className={classNames(
          'has-text-black',
          'is-uppercase',
          'is-size-3-mobile',
          classes.title
        )}
      >
        {children}
      </h1>
      <Image imageUrl={imageUrl} className='is-hidden-tablet' />
    </div>
  );
}

Title.propTypes = {
  imageUrl: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
