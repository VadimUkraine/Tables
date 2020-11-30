import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Table, TableBody, TableContainer, Paper, TablePagination,
} from '@material-ui/core';
import SponsorshipsTableHead from './SponsorshipsTableHead';
import SponsorshipsTableRow from './SponsorshipsTableRow';

export default function SponsorshipsTable() {

  const rows = useSelector((state) => state.sponsorships.items);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <SponsorshipsTableHead />
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <SponsorshipsTableRow key={row.campaignId} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
