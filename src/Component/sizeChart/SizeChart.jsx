import  React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "size", label: "Size", minWidth: 100 },
  { id: "age", label: "Age", minWidth: 100 },
  { id: "chest", label: "Chest (cm)", minWidth: 150 },
  { id: "waist", label: "Waist (cm)", minWidth: 150 },
  { id: "hips", label: "Hips (cm)", minWidth: 150 },
  { id: "height", label: "Height (cm)", minWidth: 150 },
];

const sizes = [
  {
    size: "S",
    age: "6–7",
    chest: "64.5–66",
    waist: "59.5–61.5",
    hips: "68.5–71",
    height: "122–128",
  },
  {
    size: "M",
    age: "8–9",
    chest: "66–69",
    waist: "61.5–65",
    hips: "71–74.5",
    height: "128–137",
  },
  {
    size: "L",
    age: "10–12",
    chest: "69–75",
    waist: "65–69",
    hips: "74.5–79.5",
    height: "137–147",
  },
  {
    size: "XL",
    age: "14–16",
    chest: "75–81.5",
    waist: "69–72.5",
    hips: "79.5–84.5",
    height: "147–158",
  },
  {
    size: "XXL",
    age: "6–7",
    chest: "64.5–66",
    waist: "59.5–61.5",
    hips: "68.5–71",
    height: "122–128",
  }
];

const SizeChart = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: 2 ,backgroundColor:'#f9f9f9',boxShadow:'none'}} className="">
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="size chart table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sizes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center">
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={sizes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default SizeChart;
