import { Stack, Typography } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      alignItems={`center`}
      justifyContent={`center`}
    //   bgcolor={`#fff`}
      width={`100%`}
      height={`calc(60vh)`}
    >
      <img
        // width={`24px`}
        // height={`24px`}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669953832/hng/todoAppVirtualAssistant/1490_b4hswo.png"
        alt="pre-loader"
      />
      <Typography color={`#5D21E6`} fontWeight={700}>
        Hold on a bit...
      </Typography>
    </Stack>
  );
};

export default Loader;
