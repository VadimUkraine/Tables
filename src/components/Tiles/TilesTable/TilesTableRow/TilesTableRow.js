import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import getStringDateYearMonthDay from '../../../../global/utils';

const useStyles = makeStyles({
  mediaImage: {
    width: '5rem',
    height: '5rem',
  },
});

const TilesTableRow = ({ row }) => {
  const classes = useStyles();

  return (
    <TableRow hover>
      <TableCell>{row.categoryType}</TableCell>
      <TableCell align="center">{getStringDateYearMonthDay(row.createdDate)}</TableCell>
      <TableCell align="center">{getStringDateYearMonthDay(row.updatedDate)}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell align="center">{row.mediaType}</TableCell>
      <TableCell align="center">{row.mediaHeight}</TableCell>
      <TableCell align="center">{row.mediaWidth}</TableCell>
      <TableCell align="center">
        <img src={row.mediaImageUri} alt="Cover image" className={classes.mediaImage} />
      </TableCell>
      <TableCell align="right">{row.likesCount}</TableCell>
      <TableCell align="right">{row.sharesCount}</TableCell>
    </TableRow>
  );
};

TilesTableRow.propTypes = {
  row: PropTypes.shape({
    categoryType: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired,
    mediaHeight: PropTypes.number.isRequired,
    mediaWidth: PropTypes.number.isRequired,
    mediaImageUri: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    sharesCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default TilesTableRow;
