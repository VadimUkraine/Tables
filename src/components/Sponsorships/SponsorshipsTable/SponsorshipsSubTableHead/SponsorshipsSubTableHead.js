import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
import sponsorshipsSubTableHeadings from './constants';

const SponsorshipsSubTableHead = () => (
  <TableHead>
    <TableRow>
      {sponsorshipsSubTableHeadings.map((header) => (
      <TableCell
        key={header.id}
        align={header.align}
      >
        {header.label}
      </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default SponsorshipsSubTableHead;
