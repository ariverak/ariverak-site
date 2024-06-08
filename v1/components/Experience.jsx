import React from 'react';
import { createUseStyles } from 'react-jss';
import Image from 'next/image';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  root: {
    '& hr': {
      margin: '10px 0',
    },
  },
  title: {
    display: 'inline-flex',
    alignItems: 'center',
    '& span': {
      marginRight: 10,
    },
  },
  experienceTitle: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 5,
    '& img': {
      borderRadius: '50%',
    },
    '& .workplace': {
      margin: '0 10px',
    },
  },
});

function Experience({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className='icon'>
          <i className='fas fa-laptop' />
        </span>
        <h3 className='has-text-black is-size-4'>EXPERIENCIA PROFESIONAL</h3>
      </div>
      <hr className='has-background-info' />
      {data.map((experience, i) => (
        <div key={i}>
          <a
            className='is-inline'
            href={experience.link || '#'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={classes.experienceTitle}>
              <Image alt='' src={experience.logo} width={50} height={50} />
              <h5 className='workplace has-text-black has-text-weight-bold'>
                {experience.workplace}
              </h5>
            </div>
          </a>
          <div>{experience.yearsBetween.join(' - ')}</div>
          <div className='has-text-weight-bold'>{experience.description}</div>
          <br />
        </div>
      ))}
      {/* {yearsLabel} */}
    </div>
  );
}

Experience.propTypes = {
  data: PropTypes.array,
};

export default Experience;
