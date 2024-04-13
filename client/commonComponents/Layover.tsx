import { Stack } from "@mui/material";
import React from "react";

const Overlay = ({ children }: { children: JSX.Element }) => {
  return <Stack sx={overlayStyle}>{children}</Stack>;
};

const overlayStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  cursor: "pointer"
};

export default Overlay;
