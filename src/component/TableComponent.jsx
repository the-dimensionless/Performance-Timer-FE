/* eslint-disable react/prop-types */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatTime, getTSFormat } from "../utils";

const TableComponent = ({ eventType, data }) => {
  return (
    <>
      <h4>{eventType}</h4>
      <TableContainer component={Paper}>
        {data.length > 0 ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Event Type</TableCell>
                <TableCell align="center">Distance</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="center">Time Taken</TableCell>
                <TableCell align="center">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.eventType}
                  </TableCell>
                  <TableCell align="center">{row.distance}</TableCell>
                  <TableCell align="center">{row.unit}</TableCell>
                  <TableCell align="center">{formatTime(row.time)}</TableCell>
                  <TableCell align="center">
                    {getTSFormat(row.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p style={{ textAlign: "center" }}>
            No record is present for the event
          </p>
        )}
      </TableContainer>
    </>
  );
};

export default TableComponent;
