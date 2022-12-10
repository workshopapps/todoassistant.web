import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AddCardIcon from "@mui/icons-material/AddCard";
import Box from "@mui/material/Box";
import RemindMeModal from "../../components/settings-components/RemindeMeModal";

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
        <RemindMeModal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}
