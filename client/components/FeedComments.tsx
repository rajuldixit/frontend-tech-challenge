import React from "react";
import { Stack, Container } from "@mui/material";

// import closeSvg from "../../public/close-dialog.svg";
import { IComment, IFeedsComment } from "../utils/types";

const FeedComments = ({ feedComments }: { feedComments?: IFeedsComment }) => {
  console.log(feedComments);
  return (
    <Container sx={{ flexDirection: "row" }}>
      <Stack>{/* <img src={closeSvg} alt="close-layover" /> */}</Stack>
      <Stack></Stack>
    </Container>
  );
};

export default FeedComments;
