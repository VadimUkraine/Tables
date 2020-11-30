import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getSponsorshipsRequest } from '../../redux/actions/sponsorships';
import SponsorshipsTable from './SponsorshipsTable';
import { TILES } from '../../global/config';

const useStyles = makeStyles(() => createStyles({
  loader: {
    margin: '7% auto',
    display: 'block',
  },
  customLink: {
    margin: '1rem 1rem 1rem auto',
    width: '5rem',
    display: 'block',
    border: '1px solid blue',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    textAlign: 'center',
    '&:hover': {
      background: 'blue',
      color: 'white',
    },
  },
  customSnackbar: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: '600',
  },
}));

const Sponsorships = () => {

  const sponsorships = useSelector((state) => state.sponsorships);
  const { isLoading, error } = sponsorships;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSponsorshipsRequest());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <div className="">
      <Helmet>
        <link rel="canonical" href="https://api-test.test.aws.the8app.com/campaigns/sampledata/sponsorships" />
        <title>Sponsorships</title>
      </Helmet>
      <Link className={classes.customLink} to={TILES}>Next Table</Link>
      {isLoading ? (
        <CircularProgress
          color="secondary"
          className={classes.loader}
          size={100}
          thickness={4}
        />) : <SponsorshipsTable />
      }
      {error && (
        <Snackbar
          open={true}
          message="Ups! Error while loading data"
          ContentProps={{
            className: classes.customSnackbar,
          }}
        />
      )}
    </div>
  );
};

export default Sponsorships;
