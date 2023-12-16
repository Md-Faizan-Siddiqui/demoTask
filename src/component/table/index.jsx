import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Switch from "../../component/toggleSwitch";
import Avatar from "../avatar/index";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "email",
    headerName: "EMAIL",
    width: 300,
    editable: true,
  },
  {
    field: "name",
    headerName: "NAME",
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar />{" "}
          <Typography
            sx={{
              ml: "10px",
            }}
          >
            User Name
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "phoneNo",
    headerName: "PHONE NO",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "interviewTiming",
    headerName: "INTERVIEW TIMINGS",
    width: 200,
    editable: true,
  },
  {
    field: "role",
    headerName: "ROLE",
    width: 110,
    editable: true,
  },
  {
    field: "active",
    headerName: "ACTIVE",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
          <Switch lable="" />
        </div>
      );
    },
  },
];
// valueGetter: (params) =>
//   `${params.row.firstName || ""} ${params.row.lastName || ""}`,

const rows = [
  {
    id: 1,
    email: "Snow@gmail.com",
    name: "Snow Jon",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 2,
    email: "Lannister@gmail.com",
    name: "Lannister Cersei",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 3,
    email: "Lannister@gmail.com",
    name: "Lannister Jaime",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 4,
    email: "Stark@gmail.com",
    name: "Stark Arya",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 5,
    email: "Targaryen@gmail.com",
    name: "Targaryen Daenerys",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 6,
    email: "Melisandre@gmail.com",
    name: "Melisandre",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 7,
    email: "Clifford@gmail.com",
    name: "Clifford Ferrara",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 8,
    email: "Frances@gmail.com",
    name: "Frances Rossini",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 9,
    email: "Roxie@gmail.com",
    name: "Roxie Harvey",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 10,
    email: "Snow@gmail.com",
    name: "Snow Jon",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 11,
    email: "Lannister@gmail.com",
    name: "Lannister Cersei",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 12,
    email: "Lannister@gmail.com",
    name: "Lannister Jaime",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 13,
    email: "Stark@gmail.com",
    name: "Stark Arya",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 14,
    email: "Targaryen@gmail.com",
    name: "Targaryen Daenerys",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 15,
    email: "Melisandre@gmail.com",
    name: "Melisandre",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 16,
    email: "Clifford@gmail.com",
    name: "Clifford Ferrara",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 17,
    email: "Frances@gmail.com",
    name: "Frances Rossini",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
  {
    id: 18,
    email: "Roxie@gmail.com",
    name: "Roxie Harvey",
    phoneNo: "+62 34346-3847",
    interviewTiming: "Morning",
    role: "other",
    active: "",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
