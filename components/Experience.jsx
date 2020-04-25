import React from 'react';
// import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& hr': {
      margin: '10px 0'
    }
  },
  title: {
    display: 'inline-flex',
    alignItems: 'center',
    '& span': {
      marginRight: 10
    }
  }
});

export default function Education({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className="icon">
          <i className="fas fa-laptop" />
        </span>
        <h3 className="has-text-black is-size-4">EXPERIENCIA</h3>
      </div>
      <hr className="has-background-info" />
      {data.map((experience, i) => (
        <div key={i}>
          <div className="has-text-black has-text-weight-bold">
            {experience.workplace}
          </div>
          <div>{experience.yearsBetween.join(' - ')}</div>
          <div className="has-text-weight-bold">{experience.description}</div>
          <br />
        </div>
      ))}
      {/* {yearsLabel} */}
    </div>
  );
}
