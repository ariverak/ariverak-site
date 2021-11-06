import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Contact from '@components/Contact';
import Social from '@components/Social';
import classNames from 'classnames';

const useStyles = createUseStyles({
  root: {
    display: 'none',
    // backgroundColor: '#ededed',
    '& hr': {
      width: '100%',
      margin: '10px 0',
    },
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
  },
});

function MobileFooter({ contact, social }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, 'is-flex-mobile')}>
      <hr className='has-background-info' />
      <Contact data={contact} />
      <Social data={social} />
    </div>
  );
}

MobileFooter.propTypes = {
  contact: PropTypes.array,
  social: PropTypes.array,
};

export default MobileFooter;
