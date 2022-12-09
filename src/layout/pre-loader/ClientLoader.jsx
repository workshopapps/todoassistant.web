import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const style = {
  fontWeight: 700
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#714DD9`,
    color: `#fff`
  }
}));

export default function ClientLoader() {
  const userList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
    return (
      <TableRow
        key={index}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          "&:hover": { bgcolor: `#714DD910` }
        }}
      >
        <TableCell>
          <Stack gap={1} direction={`row`} alignItems={`center`}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" height={10} width={`70%`} />
          </Stack>
        </TableCell>
        <TableCell>
          <Skeleton variant="text" height={20} />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" height={20} />
        </TableCell>
        <TableCell>
          <Skeleton
            variant="rectangle"
            width={`5rem`}
            height={`2rem`}
            sx={{ borderRadius: `16px` }}
          />
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
