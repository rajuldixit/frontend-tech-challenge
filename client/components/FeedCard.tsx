import React from "react";
import { Button, Card, Stack, Typography } from "@mui/material";
import { IFeed } from "../utils/types";

interface IFeedCardProps {
  feed: IFeed;
  onClick: () => void;
}
const FeedCard = ({ feed, onClick }: IFeedCardProps) => {
  return (
    <Card
      sx={{
        width: "300px",
        margin: "4px 0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            boxSizing: "border-box"
          }}
        >
          <img
            src={feed.brand.logo}
            alt=""
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <Typography variant="body1">{feed.brand.name}</Typography>
        </section>
        <Button component="a">Join Brief Now</Button>
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <img src={feed.banner_image} alt="" style={{ height: "400px" }} />
        <Typography
          variant="body2"
          sx={{ position: "absolute", bottom: "0", left: "8px", color: "#fff" }}
        >
          {feed.feed_title}
        </Typography>
      </Stack>
    </Card>
  );
};

export default FeedCard;
