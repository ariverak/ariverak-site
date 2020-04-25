import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  root: {
    marginTop: 30,
    margin: 20
  },
  info: {
    marginBottom: 10,
    '& p': {
      fontSize: 14
    },
    '& span': {
      fontSize: 12,
      marginBottom: 20
    }
  },
  title: {
    marginBottom: 40
  }
});

export default function Contact({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p
        className={classNames(
          'has-text-info',
          'is-size-4',
          'has-text-weight-medium',
          classes.title
        )}
      >
        REDES SOCIALES
      </p>
      <div className={classes.info}>
        <div className="columns is-multiline">
          {data.map((socialInfo, i) => (
            <span
              key={i}
              className="column is-half icon is-inline-flex level-left"
            >
              <i className={`fab fa-${socialInfo.icon} is-size-4`} />
              <a
                href={socialInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-weight-semibold is-size-7"
              >
                &nbsp;
                {socialInfo.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
