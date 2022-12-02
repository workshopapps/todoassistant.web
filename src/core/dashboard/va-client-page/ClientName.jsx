import { Stack, Typography } from "@mui/material";
import React from "react";
import ProfileAvatar from "./Avatar";

const ClientName = ({ fullName, align }) => {
  return (
    <Stack
      direction={`row`}
      justifyContent={align}
      alignItems={`center`}
      gap={2}
    >
      <ProfileAvatar
        size={{ width: 40, height: 40 }}
        fullName={fullName.toUpperCase()}
      />
      <Typography fontSize={`16px`}>{fullName}</Typography>
    </Stack>
  );
};

export default ClientName;
