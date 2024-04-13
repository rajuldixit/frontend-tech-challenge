import React, { useEffect, useState } from "react";

import "./App.css";
import Feeds from "./pages/Feeds";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        position: "relative",
        padding: "0 !important",
        boxSizing: "border-box"
      }}
    >
      <Feeds />
    </Container>
  );
}

export default App;
