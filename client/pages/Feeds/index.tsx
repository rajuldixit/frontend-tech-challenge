import React, { useCallback, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Box, Container, Stack } from "@mui/material";
import FeedCard from "../../components/FeedCard";
import { IFeed } from "../../utils/types";
import axios from "axios";
import { FETCH_FEEDS } from "../../utils/endpoints";

const Feeds = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [items, setItems] = useState(new Array());
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const BASE_SERVER_URL = process.env.REACT_APP_BASE_SERVER_URL;

  const [isLayover, setLayover] = useState(false);

  const fetchFeeds = useCallback(async () => {
    console.log(BASE_SERVER_URL);
    axios
      .get(`${BASE_SERVER_URL}${FETCH_FEEDS}?page=${page}&limit=${limit}`)
      .then((resp) => {
        setItems((prevItems) => [...prevItems, ...resp.data]);
      })
      .catch((e) => console.log(e));
    setPage((prevPage) => prevPage + 1);
  }, [page, loading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchFeeds();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchFeeds]);
  useEffect(() => {
    fetchFeeds();
  }, []);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : !errorMessage && items ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ background: "#ededed" }}
        >
          <Stack>
            {items &&
              items?.map((feed: IFeed) => (
                <FeedCard key={feed.briefref} feed={feed} />
              ))}
          </Stack>
        </Box>
      ) : (
        <div>{errorMessage}</div>
      )}
      {}
    </>
  );
};

export default Feeds;
