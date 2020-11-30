import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
import tilesHeadings from './constants';

const TilesTableHead = () => (
    <TableHead>
      <TableRow>
        {tilesHeadings.map((header) => (
          <TableCell
            key={header.id}
            align={header.align}
            style={{ minWidth: header.minWidth }}
          >
            {header.label}
          </TableCell>))
        }
      </TableRow>
    </TableHead>
);

export default TilesTableHead;
