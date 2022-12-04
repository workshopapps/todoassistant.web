import { Avatar } from "@mui/material";
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

function stringAvatar(name = "user name") {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  };
}

const ProfileAvatar = ({ fullName, size, image, fontSize }) => {
  return (
    <Avatar
      {...stringAvatar(fullName)}
      alt="Remy Sharp"
      src={image}
      sx={{
        width: size.width,
        height: size.height,
        background: `#714DD980`,
        fontSize: fontSize,
        fontWeight: 700,
        color: `#714DD9`
      }}
    />
  );
};

export default ProfileAvatar;
