import { Stack, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const VaClientHeader = () => {
  return (
    <Stack
      direction="row"
      alignItems={`center`}
      bgcolor={`#fff`}
      borderRadius={`8px`}
      px={`3.6rem`}
      py={`2.25rem`}
    >
      <PersonIcon
        sx={{
          fontSize: `3rem`,
          margin: `0 1rem`,
          bgcolor: `#714DD980`,
          borderRadius: `100%`,
          padding: `.5rem`
        }}
      />
      <Typography fontWeight={700} fontSize={`1.25rem`} color={`#333333`}>
        Clients
      </Typography>
    </Stack>
  );
};

export default VaClientHeader;
