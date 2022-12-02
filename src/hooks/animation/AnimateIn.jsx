import React, { useRef } from "react";
import useElementOnScreen from "./useElementOnScreen";
import animate from "./animate.module.scss";

const AnimateIn = ({ from, to, children }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = {
    transition: "1.5s ease-in-out"
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to
            }
          : {
              ...defaultStyles,
              ...from
            }
      }
    >
      {children}
    </div>
  );
};

const FadeIn = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);
const FadeUp = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);
const ScaleIn = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </AnimateIn>
);
const float = ({ children }) => (
  <AnimateIn from={animate.sprite}>{children}</AnimateIn>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  float
};
