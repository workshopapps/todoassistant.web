import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClientName from "./ClientName";
import { Chip, styled, Typography } from "@mui/material";
import ClientDropdown from "./ClientDropdown";

const style = {
  fontWeight: 700
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#714DD9`,
    color: theme.palette.common.white
  }
}));

export default function VaClientUserList({ vaUsers }) {
  const userList = vaUsers?.map((user, index) => {
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
      sx={{
        height: `calc(100vh - 300px)`,
        borderRadius: `8px`
      }}
      className={`shadow`}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={style}>Client's name</StyledTableCell>
            <StyledTableCell sx={style}>Phone Number</StyledTableCell>
            <StyledTableCell sx={style}>Email Address</StyledTableCell>
            <StyledTableCell colSpan={2} sx={style}>
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{userList}</TableBody>
      </Table>
    </TableContainer>
  );
}
