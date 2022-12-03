import { Box, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboardlayout from "../../../layout/dasboard-layout/Dashboardlayout";
import Loader from "./Loader";
import StatusBar from "./StatusBar";
import VaClientHeader from "./VaClientHeader";
import VaClientUserList from "./VaClientUserList";

const VaClientPage = () => {
  const [loading, setLoading] = useState(false);
  const [vaUsers, setVaUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IjJAYS5jb20iLCJJZCI6Ijc1MjVjNTIzLWQ0MzktNGU1NS1iM2M4LTMxMGViMjgzYTk4MiIsIlN0YXR1cyI6IlZBIiwiZXhwIjoxNjcwMTEzNTgzfQ.J4bLyxsZj-zWGEqs_AR1yxpOEg8Enum7Cod42b4oLb0`;
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/va/user/7525c523-d439-4e55-b3c8-310eb283a982`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.data.code === 200) {
        setLoading(false);
        console.log(response.data.data);
        setVaUsers(response.data.data);
      }
    } catch (error) {
      setLoading(false);
      setOpen(true); // Stop loading in case of error
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Dashboardlayout>
      <Box height={`100vh`} bgcolor={`#F9F7FF`} py={`2.5rem`}>
        <Container>
          <VaClientHeader />
          <Box height={`100%`} my={`1rem`}>
            {loading ? <Loader /> : <VaClientUserList vaUsers={vaUsers} />}
          </Box>
        </Container>
      </Box>
      <StatusBar open={open} close={close} />;
    </Dashboardlayout>
  );
};

export default VaClientPage;
