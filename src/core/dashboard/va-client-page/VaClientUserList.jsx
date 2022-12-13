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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function VaClientUserList({ vaUsers }) {
  console.log(vaUsers);
  const userList = vaUsers?.map((user, index) => {
    return (
      <StyledTableRow
        key={index}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          // "&:hover": { bgcolor: `#714DD910` }
        }}
      >
        <TableCell>
          <ClientName
            image={user.avatar}
            fullName={[user.first_name, user.last_name].join(" ")}
          />
        </TableCell>
        <TableCell sx={{ display: { xs: `none`, lg: `table-cell` } }}>
          <Typography>{user.phone}</Typography>
        </TableCell>
        <TableCell sx={{ display: { xs: `none`, lg: `table-cell` } }}>
          <Typography>{user.email}</Typography>
        </TableCell>
        <TableCell sx={{ display: { xs: `none`, lg: `table-cell` } }}>
          <Chip color="success" label={user.status} variant="outlined" />
        </TableCell>
        <TableCell>
          <ClientDropdown userID={user.user_id} user={user} />
        </TableCell>
      </StyledTableRow>
    );
  });

  return (
    <TableContainer
      sx={{
        height: {
          xs: `calc(100vh - 170px)`,
          lg: `calc(100vh - 240px)`
        },
        borderRadius: `8px`
        // border: `1px solid red;`
      }}
      className={`shadow`}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client's name</StyledTableCell>
            <StyledTableCell
              sx={{ ...style, display: { xs: `none`, lg: `table-cell` } }}
            >
              Phone Number
            </StyledTableCell>
            <StyledTableCell
              sx={{ ...style, display: { xs: `none`, lg: `table-cell` } }}
            >
              Email Address
            </StyledTableCell>
            <StyledTableCell
              colSpan={2}
              // sx={{ ...style, display: { xs: `none`, lg: `table-cell` } }}
            >
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{userList}</TableBody>
      </Table>
    </TableContainer>
  );
}
