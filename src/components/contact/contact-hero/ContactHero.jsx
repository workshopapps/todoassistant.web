import ContactForm from "../contactForm/ContactForm";
import style from "./ContactHero.module.scss";
import img from "../../../assets/Group 26086234.svg";
import { Box, Stack } from "@mui/material";

const ContactHero = () => {
  return (
    <Box className={style.sectionGrid}>
      <Stack
        direction={{ xs: `column`, md: `row` }}
        alignItems={`center`}
        maxWidth={`1340px`}
        m={`0 auto`}
      >
        <Box flex={1}>
          <img src={img} alt="img" className={style.img} />
        </Box>
        <Box flex={1}>
          <ContactForm />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactHero;
