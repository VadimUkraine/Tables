import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';

const SponsorshipsSubTableRow = ({ subRow, logoClass }) => (
    <TableRow>
      <TableCell>{subRow.charityDonationIncentive.charityName}</TableCell>
      <TableCell component="th" scope="row" align="center">
        {subRow.charityDonationIncentive.amount}
      </TableCell>
      <TableCell align="center">
        <img src={subRow.charityDonationIncentive.charityLogoUri} alt="Logo of Donator" className={logoClass} />
      </TableCell>
    </TableRow>
);

SponsorshipsSubTableRow.propTypes = {
  logoClass: PropTypes.string,
  subRow: PropTypes.shape({
    charityDonationIncentive: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      charityLogoUri: PropTypes.string.isRequired,
      charityName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SponsorshipsSubTableRow;
