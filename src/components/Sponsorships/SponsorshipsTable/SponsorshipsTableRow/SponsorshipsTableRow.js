import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Box, Collapse, IconButton, Table, TableBody, TableCell, TableRow, Typography, Link,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import getStringDateYearMonthDay from '../../../../global/utils';
import SponsorshipsSubTableHead from '../SponsorshipsSubTableHead';
import SponsorshipsSubTableRow from '../SponsorshipsSubTableRow';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  downloads: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  logoImg: {
    width: '3.5rem',
    height: '3.5rem',
  },
  coverImg: {
    width: '4.5rem',
    height: '4.5rem',
  },
  truncate: {
    lineClamp: '2',
    display: '-webkit-box',
    boxOrient: 'vertical',
    overflow: 'hidden',
  },
  customCell: {
    paddingBottom: 0,
    paddingTop: 0,
  },
});

const SponsorshipsTableRow = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} hover>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.brandName}
        </TableCell>
        <TableCell align="center">
          <img src={row.brandLogoUri} alt="Logo" className={classes.logoImg} />
        </TableCell>
        <TableCell>
          <p className={classes.truncate} title={row.brandInfo}>{row.brandInfo}</p>
        </TableCell>
        <TableCell>
          <p className={classes.truncate} title={row.brief}>{row.brief}</p>
        </TableCell>
        <TableCell align="center">{getStringDateYearMonthDay(row.createdDate)}</TableCell>
        <TableCell align="center">{getStringDateYearMonthDay(row.updatedDate)}</TableCell>
        <TableCell align="center">
          <img src={row.coverTileUri} alt="Cover image" className={classes.coverImg} />
        </TableCell>
        <TableCell align="right">{row.cashIncentive.amount}</TableCell>
        <TableCell align="right">{row.questionCount}</TableCell>
        <TableCell align="right" className={classes.downloads}>
          {row.videoUriDash && <Link href={row.videoUriDash}>Video #1</Link>}
          {row.videoUriHls && <Link href={row.videoUriHls}>Video #2</Link>}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.customCell} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.charityDonationIncentive && (<Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <SponsorshipsSubTableHead />
                <TableBody>
                  <SponsorshipsSubTableRow subRow={row} logoClass={classes.logoImg}/>
                </TableBody>
              </Table>
            </Box>)
            }
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

SponsorshipsTableRow.propTypes = {
  row: PropTypes.shape({
    charityDonationIncentive: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      charityLogoUri: PropTypes.string.isRequired,
      charityName: PropTypes.string.isRequired,
    }),
    coverTileUri: PropTypes.string.isRequired,
    brandLogoUri: PropTypes.string.isRequired,
    campaignId: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    brandInfo: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired,
    cashIncentive: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }).isRequired,
    createdDate: PropTypes.string.isRequired,
    questionCount: PropTypes.number.isRequired,
    videoUriDash: PropTypes.string.isRequired,
    videoUriHls: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorshipsTableRow;
