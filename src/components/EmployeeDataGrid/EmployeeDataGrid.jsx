import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns } from "./columns";

export const EmployeeDataGrid = ({ rows }) => {
  return (
    <Box sx={{ height: 500, width: "60%", mt: 5 }}>
      <h2>Longest Working Pair</h2>
      <h3>Total Days Working Together: {rows.totalOverlap}</h3>
      <DataGrid
        sx={{ fontSize: "1rem", color: "gray" }}
        rows={rows.projects}
        columns={columns}
      />
    </Box>
  );
};
