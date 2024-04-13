import React, { useEffect, useState } from "react";

import "./App.css";
import Feeds from "./pages/Feeds";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        padding: "0 !important",
        boxSizing: "border-box",
        margin: "0 !important"
      }}
    >
      <Feeds />
    </Container>
  );
}

export default App;
