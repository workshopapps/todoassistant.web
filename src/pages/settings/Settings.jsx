import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AddCardIcon from "@mui/icons-material/AddCard";
import Box from "@mui/material/Box";
import Reminders from "../../components/reminders/Reminders";
// import styles from "./subscription.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import {
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import tickCircle from "../../components/subscriptionPlan/tick-circle.png";
// import wtickCircle from "./white-tick-circle.png";
import { Link } from "react-router-dom";
// import RemindMeModal from "../../components/settings-components/RemindeMeModal";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`
//   };
// }

export default function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const monthlySubHandler = async e => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MAPmTI5J0OejWbHH6IqoNp50hZhC6xkKng9AzuVDwn59YeMaxb6hpPdkdbSXZOg64ljfXAHEbMniy9n6qqLpZLh00IVWE7Hu4"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MARPQI5J0OejWbHKTJxlci7",
          quantity: 1
        }
      ],
      mode: "subscription",
      successUrl: "https://ticked.hng.tech/success",
      cancelUrl: "https://ticked.hng.tech/subscribe"
    });

    console.log(error);
  };

  const yearlySubHandler = async e => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MAPmTI5J0OejWbHH6IqoNp50hZhC6xkKng9AzuVDwn59YeMaxb6hpPdkdbSXZOg64ljfXAHEbMniy9n6qqLpZLh00IVWE7Hu4"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MARQPI5J0OejWbHs6DiLgRX",
          quantity: 1
        }
      ],
      mode: "subscription",
      successUrl: "https://ticked.hng.tech/success",
      cancelUrl: "https://ticked.hng.tech/cancel"
    });

    console.log(error);
  };

  return (
    <Box padding={`24px`} sx={{ width: "100%" }}>
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: `8px` }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Reminder"
            icon={<AccessAlarmsIcon sx={{ ml: 1 }} />}
            iconPosition={`end`}
          />
          <Tab
            label="Subscription"
            icon={<AddCardIcon sx={{ ml: 1 }} />}
            iconPosition={`end`}
          />
          {/* <Tab label="Item Three" /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Reminders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack
          justifyContent={`space-between`}
          direction={`row`}
          flexWrap={`wrap`}
        >
          <Box padding={5} borderRadius={`8px`} className={`shadow`}>
            <Box mb={3}>
              <Box>
                <Typography>Basic</Typography>
                <Typography
                  color={`#714dd9`}
                  fontSize={`3rem`}
                  fontWeight={700}
                  component={`h3`}
                >
                  Free
                </Typography>
                <Typography>For Everyone</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />
                  Max 5 To-do’s
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />5 MB file upload
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />1 week activity history
                </ListItem>
              </List>
            </Box>
            <Link to="/signup">
              <Button
                sx={{
                  bgcolor: `#714dd9`,
                  "&:hover": {
                    bgcolor: `#714dd950`
                  }
                }}
                variant="contained"
              >
                Get Started
              </Button>
            </Link>
          </Box>
          {/* ====================================================== */}
          <Box
            padding={5}
            bgcolor={`#714dd9`}
            color={`#fff`}
            borderRadius={`8px`}
            className={`shadow`}
          >
            <Box mb={3}>
              <Box>
                <Typography color={`#fff`}>Popular</Typography>
                <Typography
                  color={`#fff`}
                  fontSize={`3rem`}
                  fontWeight={700}
                  component={`h3`}
                >
                  $20
                  <Typography component={`span`} fontSize={`x-small`}>
                    /Month
                  </Typography>
                </Typography>
                <Typography color={`#fff`}>For the Busy</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />
                  Max 5 To-do’s
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />5 MB file upload
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />1 week activity history
                </ListItem>
              </List>
            </Box>

            <Button
              onClick={monthlySubHandler}
              sx={{
                bgcolor: `#fff`,
                color: `#714dd9`,
                "&:hover": {
                  bgcolor: `#fff`
                }
              }}
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
          {/* ====================================================== */}
          <Box padding={5} borderRadius={`8px`} className={`shadow`}>
            <Box mb={3}>
              <Box>
                <Typography>Celebrity</Typography>
                <Typography
                  color={`#714dd9`}
                  fontSize={`3rem`}
                  fontWeight={700}
                  component={`h3`}
                >
                  $200
                  <Typography component={`span`} fontSize={`x-smal`}>
                    /Month
                  </Typography>
                </Typography>
                <Typography>For the Classy</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />
                  Max 5 To-do’s
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />5 MB file upload
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <img src={tickCircle} alt="ticked" />1 week activity history
                </ListItem>
              </List>
            </Box>

            <Button
              onClick={yearlySubHandler}
              sx={{
                bgcolor: `#714dd9`,
                "&:hover": {
                  bgcolor: `#714dd950`
                }
              }}
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}