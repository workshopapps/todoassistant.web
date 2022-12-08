import { Box, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const getUsers = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));
    // let vaUser = JSON.parse(localStorage.getItem("MASTER"));

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/va/user/${vaUser.data.va_id}`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );
      if (response.data.code === 200) {
        setLoading(false);
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
    <>
      <Box height={`calc(100vh - 120px)`} bgcolor={`#F9F7FF`} py={`2.5rem`}>
        <Container>
          <VaClientHeader numberOfUsers={vaUsers.length} />
          <Box height={`100%`} my={`1rem`}>
            {loading ? <Loader /> : <VaClientUserList vaUsers={vaUsers} />}
          </Box>
        </Container>
      </Box>
      <StatusBar open={open} close={close} />
    </>
  );
};

export default VaClientPage;
