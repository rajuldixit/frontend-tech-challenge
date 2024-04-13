const express = require("express");
const router = express.Router();

const feedsData = require("../data/feed.json");
const comments = require("../data/comments.json");

router.get("/feeds", (req, res) => {
  try {
    const pageNumber = req.query.page;
    const limit = req.query.limit;

    const baseCalculation = pageNumber * limit;
    const start = baseCalculation - limit;
    const end = baseCalculation - 1;

    const result = new Array();
    for (let i = start; i <= end; i++) {
      feedsData[i] ? result.push(feedsData[i]) : "";
    }
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});

router.get("/comments", (req, res) => {
  try {
    const briefref = req.query.briefref;

    const relatedComments = comments.map((comment) => {
      if (comment.briefref === briefref) return comment;
    });
    console.log(relatedComments);
    res.status(200).send(relatedComments);
  } catch (error) {
    res.status(400).send({ message: e.message });
  }
});

module.exports = router;
