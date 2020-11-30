import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => createStyles({
  backBtn: {
    marginTop: '2rem',
    width: '12rem',
  },
  wrapper: {
    display: 'flex',
    paddingLeft: '2rem',
    flexDirection: 'column',
    paddingTop: '2rem',
  },
}));

const NotFound = () => {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      Ups, not Found!
      <Button className={classes.backBtn} variant="outlined" color="primary" href="/">
        Back to main page
      </Button>
    </div>
  );
};

export default NotFound;
