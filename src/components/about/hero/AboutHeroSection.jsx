import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../button/ButtonComponent";
import style from "./aboutHero.module.scss";

const AboutHeroSection = () => {
  return (
    <Stack
      direction={{ xs: `column-reverse`, md: `row` }}
      alignItems={`center`}
      className={style.header}
    >
      <Box flex={1} className={style.text}>
        <h1>
          About <span className={style.yellowText}>Ticked</span>
        </h1>
        <Typography fontSize={{ xs: `16px`, md: `20px` }} m={`1rem 0 3rem 0`}>
          We have built this To Do List App for you to get your tasks delegated
          to a Virtual Assistant who will take the stress off your shoulders,
          get more tasks done for you while you stay focused.
        </Typography>
        <Button
          link={`/login`}
          title={`Get Started`}
          style={{ width: `207px` }}
        />
      </Box>
      <Box flex={1} className={style.img}>
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669325707/hng/todoAppVirtualAssistant/Group_34485_djmcxu.svg"
          alt="img"
        />
      </Box>
    </Stack>
  );
};

export default AboutHeroSection;
