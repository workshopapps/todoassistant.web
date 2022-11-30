import React from "react";

// import Button from "../../components-II/button/ButtonComponent";

const GeneralLoading = ({ text }) => {
  const style = {
    height: `90vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
  };
  return (
    <section style={style} height={`85vh`}>
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
            color: `rgba(247, 148, 31, 1)`
          }}
        >
          {text}
        </p>
      )}

      <div style={{ margin: `3rem 0`, fontWeight: 700 }}>
        <a href="/">Go Back Home</a>
      </div>
    </section>
  );
};

export default GeneralLoading;
