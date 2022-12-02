import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  };
}

const ClientName = ({ fullName }) => {
  return (
    <Stack direction={`row`} alignItems={`center`} gap={2}>
      <Avatar
        {...stringAvatar(fullName.toUpperCase())}
        alt="Remy Sharp"
        // src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159344/hng/todoAppVirtualAssistant/Contivio_Software_guy_1_nhhtba.png"
        sx={{
          width: 40,
          height: 40,
          background: `#714DD980`,
          fontSize: `14px`,
          fontWeight: 700,
          color: `#714DD9`
        }}
      />
      <Typography fontSize={`16px`}>{fullName}</Typography>
    </Stack>
  );
};

export default ClientName;
