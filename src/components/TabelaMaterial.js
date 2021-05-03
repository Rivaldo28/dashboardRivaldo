import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(() => ({
  head: {
    color: '#FFF',
    background: '#111'
  },
  body: {
    fontSize: 14,
    textAlign: "Center"
  }
}))(TableCell);

function TabelaMaterial(props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Agenda</StyledTableCell>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell>Dias</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(elemento => (
            <TableRow key={elemento.id}>
              <TableCell>{" "}{elemento.agenda}</TableCell>
              <TableCell text-align="center">{elemento.fecha}</TableCell>
              <TableCell text-align="center">{elemento.data}</TableCell>
            </TableRow>
          ))};
      </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TabelaMaterial;