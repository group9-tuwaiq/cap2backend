const express = require("express");
const {
  getAllMovies,
  getAllMusic,
  getAllPodcast,
  getAllTvshow,
  getAllEbook,
  getAllAudiobook,
  getAllSoftware,
  fav,
  getItemDetails,
  getCurrentItem,
  getFavoriteItem,
  postFavoriteItems
} = require("../controllers/itunesController");

const itunesRouetr = express.Router();

itunesRouetr.get("/movies", getAllMovies);

itunesRouetr.get("/music", getAllMusic);

itunesRouetr.get("/podcast", getAllPodcast);

itunesRouetr.get("/tvShow", getAllTvshow);

itunesRouetr.get("/ebook", getAllEbook);

itunesRouetr.get("/audiobook", getAllAudiobook);

itunesRouetr.get("/software", getAllSoftware);

itunesRouetr.post("/fav", fav);

itunesRouetr.post("/getItemDetails", getItemDetails);

itunesRouetr.get("/getCurrentItem", getCurrentItem);

// itunesRouetr.post("/postFavoriteItems", postFavoriteItems);

itunesRouetr.get("/getFavoriteItem", getFavoriteItem);

module.exports = itunesRouetr;
