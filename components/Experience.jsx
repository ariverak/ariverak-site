import React from 'react';
import { createUseStyles } from 'react-jss';
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
          <div className='has-text-black has-text-weight-bold'>
            {experience.workplace}
          </div>
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
