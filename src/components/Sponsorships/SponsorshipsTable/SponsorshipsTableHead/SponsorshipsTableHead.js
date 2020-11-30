import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
import sponsorshipsTableHeadings from './constants';

const SponsorshipsTableHead = () => (
    <TableHead>
      <TableRow>
        {sponsorshipsTableHeadings.map((header) => (
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

export default SponsorshipsTableHead;
