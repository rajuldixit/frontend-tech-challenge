import React, { useEffect, useState } from "react";
import { Stack, Container, Box, Typography, Button } from "@mui/material";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";
import moment from "moment";
import { IFeedsComment } from "../utils/types";
import useFormatedDate from "../helper/useFormatedDate";

const FeedComments = ({
  feedComments,
  closeLayover
}: {
  feedComments?: IFeedsComment;
  closeLayover: () => void;
}) => {
  const [isBanneImage, setIsBanneImage] = useState(true);
  const [bgColor, setbgColor] = useState("#2e2d2d");
  const { formatDate } = useFormatedDate();
  const onChangeMiddleSection = (flag: boolean) => {
    setIsBanneImage(flag);
  };

  useEffect(() => {
    isBanneImage ? setbgColor("#2e2d2d") : setbgColor("#fff");
  }, [isBanneImage]);
  return (
    <Container
      maxWidth={false}
      sx={{
        flexDirection: { xs: "column-reverse", sm: "row" },
        display: "flex",
        justifyContent: "space-between",
        height: { sm: "100vh" },
        position: "relative",
        padding: "0 !important",
        boxSizing: "border-box",
        margin: "0 !important"
      }}
    >
      <Stack
        sx={{
          width: { xs: "100%", sm: "70%" },
          height: { xs: "70vh", sm: "inherit" },
          background: bgColor,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row"
        }}
      >
        <HighlightOffTwoToneIcon onClick={closeLayover} />
        {!isBanneImage && (
          <Box
            sx={{
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              minHeight: "500px",
              alignItems: "center",
              width: { xs: "80%", sm: "55%" }
            }}
          >
            <img
              src={feedComments?.feed.brand.logo}
              style={{ width: "48px", height: "48px", marginRight: "8px" }}
              alt="logo"
            />
            <Typography variant="h6" my={1}>
              {feedComments?.feed.feed_title}
            </Typography>
            <Typography variant="body1" my={1}>
              {formatDate(feedComments?.feed.starts_on || "")}
            </Typography>
            <Typography variant="body1">
              {feedComments?.feed.banner_text}
            </Typography>
            <img
              src={feedComments?.feed.ad_1_image}
              alt="image1"
              style={{ width: "400px", height: "400px", marginRight: "8px" }}
            />
            <Typography variant="body2" my={2} sx={{ width: "400px" }}>
              {feedComments?.feed.description}
            </Typography>
            <img
              src={feedComments?.feed.ad_2_image}
              alt="image1"
              style={{ width: "400px", height: "400px", marginRight: "8px" }}
            />
          </Box>
        )}
        {isBanneImage && (
          <Box
            sx={{
              height: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Stack sx={{ background: "black", width: "55%" }}>
              <img
                src={feedComments?.feed.banner_image}
                style={{ height: "inheri", width: "inherit" }}
                alt="feed-banner-image"
              />
            </Stack>
          </Box>
        )}

        <Stack justifyContent={"center"} flexDirection={"column"}>
          <Button disabled={isBanneImage}>
            <ExpandCircleDownTwoToneIcon
              sx={{ rotate: "180deg" }}
              onClick={() => onChangeMiddleSection(true)}
            />
          </Button>
          <Button disabled={!isBanneImage}>
            <ExpandCircleDownTwoToneIcon
              onClick={() => onChangeMiddleSection(false)}
            />
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", sm: "30%" },
          height: { xs: "30vh", sm: "inherit" },
          background: "lightgrey",
          padding: "16px",
          boxSizing: "border-box"
        }}
      >
        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            boxSizing: "border-box"
          }}
        >
          <img
            src={feedComments?.feed.brand.logo}
            alt=""
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <Typography variant="body1" my={1}>
            {feedComments?.feed.brand.name}
          </Typography>
        </section>

        {feedComments?.comment && feedComments?.comment?.length > 0 ? (
          <>
            <Typography>Comments</Typography>
            {feedComments?.comment?.map((item) => (
              <Typography variant="body2" my={1} key={item.comment}>
                {item.comment}
              </Typography>
            ))}
          </>
        ) : (
          <Typography>No comments available</Typography>
        )}
      </Stack>
    </Container>
  );
};

export default FeedComments;
