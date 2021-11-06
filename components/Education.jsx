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

function Education({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className='icon'>
          <i className='fas fa-graduation-cap' />
        </span>
        <h3 className='has-text-black is-size-4'>EDUCACIÓN</h3>
      </div>
      <hr className='has-background-info' />
      {data.map((education, i) => (
        <div key={i}>
          <div className='has-text-black has-text-weight-bold'>
            {education.university}
          </div>
          <div>{education.yearsBetween.join(' - ')}</div>
          <div className='has-text-weight-bold'>{education.career}</div>
          <br />
        </div>
      ))}

      {/* {yearsLabel} */}
    </div>
  );
}

Education.propTypes = {
  data: PropTypes.array,
};

export default Education;
