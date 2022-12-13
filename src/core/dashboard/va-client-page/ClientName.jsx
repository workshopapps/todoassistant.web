import { Stack, Typography } from "@mui/material";
import React from "react";
import ProfileAvatar from "./Avatar";

const ClientName = ({ fullName, align, image }) => {
  return (
    <Stack
      direction={`row`}
      justifyContent={align}
      alignItems={`center`}
      gap={2}
    >
      <ProfileAvatar
        image={image}
        fontSize={`14px`}
        size={{ width: 40, height: 40 }}
        fullName={fullName.toUpperCase()}
      />
      <Typography fontSize={{ xs: `14px`, sm: `16px` }}>{fullName}</Typography>
    </Stack>
  );
};

export default ClientName;
