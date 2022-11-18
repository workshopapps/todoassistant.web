import React from "react";

const GeneralLoading = ({ text }) => {
  const style = {
    height: `90vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  };
  return (
    <section style={style} height={`85vh`} flexDir={`column`} gap={5}>
      <img
        width="30%"
        height="30%"
        alt="logo"
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
      />

      {text && (
        <p
          style={{
            fontSize: `2rem`,
            fontWeight: `bolder`,
            color: `rgba(247, 148, 31, 1)`,
          }}
        >
          {text}
        </p>
      )}
    </section>
  );
};

export default GeneralLoading;
