import React, { useState } from "react";
import {
  TableContainer,
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  Collapse,
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  Badge,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import data from './../../assets/eventsData.json'

const rows = data;

const getBadgeColor = (value) => {
  switch (value) {
    case "Activities":
      return "orange";
    case "Projects":
      return "cyan";
    case "Cultural":
      return "green";
    case "Full":
      return "error";
    case "Available":
      return "success";
    default:
      return "primary";
  }
};

export default function Events() {
  const theme = useTheme();
  const [expandedRow, setExpandedRow] = useState(null);

  const columns = [
    { id: "name", label: "Name", align: "center" },
    { id: "department", label: "Department", align: "center" },
    { id: "status", label: "Status", align: "center" },
    { id: "date", label: "Date", align: "center" },
  ];

  const handleRowClick = (rowIndex) => {
    setExpandedRow(expandedRow === rowIndex? null : rowIndex);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Upcoming Events
      </Typography>
      <TableContainer sx={{ maxHeight: "100vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    backgroundColor: "#2e3192",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  onClick={() => handleRowClick(rowIndex)}
                  key={rowIndex}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "department" || column.id === "status"? (
                        <Box display="flex" justifyContent="center">
                          <Badge color={getBadgeColor(row[column.id])} badgeContent={row[column.id]} />
                        </Box>
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {expandedRow === rowIndex && (
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                      <Collapse in={expandedRow === rowIndex} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <Typography variant="h6" gutterBottom component="div">
                                {row.name}
                              </Typography>
                              <Typography gutterBottom component="div">
                                <strong>Description:</strong> {row.description}
                              </Typography>
                              <Typography gutterBottom component="div">
                                <strong>Location:</strong> {row.location}
                              </Typography>
                              <Typography gutterBottom component="div">
                                <strong>Date:</strong> {row.date}
                              </Typography>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: theme.palette.magenta.main,
                                  borderRadius: "20px",
                                  marginTop: "8px",
                                }}
                                disableElevation
                              >
                                Apply
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              <Divider />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="h6" gutterBottom component="div">
                                Organising Committee
                              </Typography>
                              <Table size="small" aria-label="OC table">
                                <TableBody>
                                  {row.oc.map((ocMember, index) => (
                                    <TableRow key={index}>
                                      <TableCell sx={{ border: "1px solid #000" }}>
                                        {ocMember}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}