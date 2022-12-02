import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClientName from "./ClientName";
import { Chip, Typography } from "@mui/material";
import ClientDropdown from "./ClientDropdown";

const style = {
  fontWeight: 700
};

export default function VaClientUserList({ vaUsers }) {
  const userList = vaUsers.map((user, index) => {
    return (
      <TableRow
        key={index}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          "&:hover": { bgcolor: `#714DD910` }
        }}
      >
        <TableCell>
          <ClientName fullName={[user.first_name, user.last_name].join(" ")} />
        </TableCell>
        <TableCell>
          <Typography>{user.phone}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{user.email}</Typography>
        </TableCell>
        <TableCell>
          <Chip color="success" label={user.status} variant="outlined" />
        </TableCell>
        <TableCell>
          <ClientDropdown userID={user.user_id} />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer
      sx={{ padding: `2rem 3.6rem` }}
      elevation={0}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={style}>Client's name</TableCell>
            <TableCell sx={style}>Phone Number</TableCell>
            <TableCell sx={style}>Email Address</TableCell>
            <TableCell sx={style}>Status</TableCell>
            <TableCell sx={style}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{userList}</TableBody>
      </Table>
    </TableContainer>
  );
}
