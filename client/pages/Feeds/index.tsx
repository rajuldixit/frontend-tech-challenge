import React, { useCallback, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FeedCard from "../../components/FeedCard";
import { IComment, IFeed, IFeedsComment } from "../../utils/types";
import axios from "axios";
import { FETCH_COMMENTS, FETCH_FEEDS } from "../../utils/endpoints";
import Layover from "../../commonComponents/Layover";
import FeedComments from "../../components/FeedComments";

const Feeds = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [items, setItems] = useState(new Array());
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [feedComments, setFeedComments] = useState<IFeedsComment>();
  const BASE_SERVER_URL = process.env.REACT_APP_BASE_SERVER_URL;

  const [isLayover, setLayover] = useState(false);

  const closeLayover = () => {
    setLayover(false);
  };
  const showComments = (feed: IFeed) => {
    fetchComments(feed);
    setLayover(true);
  };

  const fetchComments = async (feed: IFeed) => {
    axios
      .get(`${BASE_SERVER_URL}${FETCH_COMMENTS}?briefref=${feed.briefref}`)
      .then((resp) => {
        setFeedComments({
          feed: feed,
          comment: resp.data[0] !== null ? resp.data : new Array()
        });
      })
      .catch((e) => setErrorMessage(e.message));
  };

  const fetchFeeds = useCallback(async () => {
    setLoading(true);
    try {
      axios
        .get(`${BASE_SERVER_URL}${FETCH_FEEDS}?page=${page}&limit=${limit}`)
        .then((resp) => {
          setItems((prevItems) => [...prevItems, ...resp.data]);
        });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
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
        <Typography variant="h3" m={4}>
          Loading
        </Typography>
      ) : !errorMessage ? (
        <>
          {items.length > 0 ? (
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
                    <FeedCard
                      key={feed.briefref}
                      feed={feed}
                      onClick={() => showComments(feed)}
                    />
                  ))}
              </Stack>
            </Box>
          ) : (
            <Typography variant="h3" m={4}>
              No records found
            </Typography>
          )}
        </>
      ) : (
        <Typography variant="h3" m={4}>
          {errorMessage}
        </Typography>
      )}
      {isLayover && (
        <Layover>
          <FeedComments
            feedComments={feedComments}
            closeLayover={closeLayover}
          />
        </Layover>
      )}
    </>
  );
};

export default Feeds;
