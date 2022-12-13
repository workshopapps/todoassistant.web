import { Badge, Stack, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const VaClientHeader = ({ numberOfUsers }) => {
  return (
    <Stack
      direction="row"
      alignItems={`center`}
      bgcolor={`#fff`}
      borderRadius={`8px`}
      className={`shadow`}
      py={`1rem`}
    >
      <Badge
        max={99}
        color="secondary"
        overlap="circular"
        badgeContent={numberOfUsers}
      >
        <PersonIcon
          sx={{
            fontSize: `2.3rem`,
            margin: `0 1rem`,
            bgcolor: `#714DD980`,
            borderRadius: `100%`,
            padding: `.5rem`
          }}
        />
      </Badge>
      <Typography
        ml={`2rem`}
        fontWeight={700}
        fontSize={`1.25rem`}
        color={`#333333`}
      >
        Clients
      </Typography>
    </Stack>
  );
};

export default VaClientHeader;
