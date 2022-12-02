import { Box, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboardlayout from "../../../layout/dasboard-layout/Dashboardlayout";
import Loader from "./Loader";
import VaClientHeader from "./VaClientHeader";
import VaClientUserList from "./VaClientUserList";

const VaClientPage = () => {
  const [loading, setLoading] = useState(false);
  const [vaUsers, setVaUsers] = useState([]);

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImtpbmdzbGV5QGdtYWlsLmNvbSIsIklkIjoiNzJkNzk0NGEtNjMwOS00YmZhLTg1NDUtMWM5NDc5OTE0YTRjIiwiU3RhdHVzIjoiVkEiLCJleHA`;
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
      setLoading(false); // Stop loading in case of error
      console.error(error);
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
    </Dashboardlayout>
  );
};

export default VaClientPage;
