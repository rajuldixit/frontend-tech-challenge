import { Container } from "@mui/material";
import React from "react";

const Overlay = ({ children }: { children: JSX.Element }) => {
  return <Container sx={overlayStyle}>{children}</Container>;
};

const overlayStyle = {
  position: "fixed",
  display: "none",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  cursor: "pointer"
};

export default Overlay;
