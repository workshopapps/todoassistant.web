import { Box } from "@mui/material";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import styles from "./SelectDropdown.module.scss";

export const SelectDropdown = ({
  mockData,
  setMockData,
  setNumTask,
  setTaskTitle
}) => {
  const [rotate, setRotate] = useState(false);
  //   const [sortOption, setSortOption] = useState(1);
  const [display, setDisplay] = useState("All");
  // const [data, setData] = useState(mockData)

  const option = [
    {
      name: "All",
      value: 0
    },
    {
      name: "DONE",
      value: 1
    },
    {
      name: "PENDING",
      value: 2
    },
    {
      name: "EXPIRED",
      value: 3
    }
  ];

  const handleSort = () => {
    setRotate(!rotate);
  };
  const handleSelect = e => {
    const name = e.target.textContent;

    setDisplay(name);

    setRotate(!rotate);
    if (name === "DONE") {
      const filteredData = mockData.filter(task => task.status === "Done");
      // setMockData(filteredData)
      // console.log(filteredData);
      setMockData(filteredData);
      setNumTask(filteredData.length);
      setTaskTitle("DONE");
    } else if (name === "PENDING") {
      const filteredData = mockData.filter(task => task.status === "Pending");
      setMockData(filteredData);
      setNumTask(filteredData.length);
      setTaskTitle("PENDING");
    } else if (name === "All") {
      // const filteredData = mockData.filter((task)=>task.status === 'Pending')
      setMockData(mockData);
      setNumTask(mockData.length);
      setTaskTitle("ALL");
    } else {
      const filteredData = mockData.filter(task => task.status === "Overdue");
      setMockData(filteredData);
      setNumTask(filteredData.length);
      setTaskTitle("OVERDUE");
    }
  };

  return (
    <Box position={"relative"}>
      <Box
        display={"flex"}
        alignItems="center"
        gap={"10px"}
        p="10px"
        border={"1px solid #333"}
        justifyContent="space-between"
        borderRadius="8px"
        sx={{ cursor: "pointer" }}
        onClick={handleSort}
        width="130px"
      >
        {" "}
        <p>{display}</p>{" "}
        <AiOutlineDown
          className={`${styles.chevron} ${rotate ? styles.rotate : ""}`}
        />{" "}
      </Box>
      <Box
        className={`${styles.dropdown} ${rotate ? styles.rotate : ""}`}
        position={"absolute"}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
        gap="7px"
        boxShadow={"0px 4px 4px #00000040;"}
        padding="3px 55px"
        borderRadius="6px"
        width={"100%"}
        sx={{
          backgroundColor: "#fff",
          scale: "0",
          opacity: "0",
          transition: "all 0.4s ease"
        }}
        visibility="hidden"
      >
        {option.map(opt => (
          <Box
            key={opt.value}
            sx={{ cursor: "pointer" }}
            onClick={handleSelect}
          >
            <p>{opt.name}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
