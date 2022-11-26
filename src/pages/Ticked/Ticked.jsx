import React from "react";
import TickedMark from "../../components/TickedMark/TickedMark";
import TickedHeader from "../../components/TickedMark/TickedHeader";
import TickedFooter from "../../components/TickedMark/TickedFooter";

const Ticked = () => {
  return (
    <>
      <TickedHeader />
      <TickedMark />
      <TickedFooter />
    </>
  );
};

export default Ticked;
