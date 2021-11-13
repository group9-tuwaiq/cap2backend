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
  search
} = require("../controllers/itunesController");

const itunesRouetr = express.Router();

itunesRouetr.get("/movies", getAllMovies);

itunesRouetr.get("/music", getAllMusic);

itunesRouetr.get("/podcast", getAllPodcast);

itunesRouetr.get("/tvShow", getAllTvshow);

itunesRouetr.get("/ebook", getAllEbook);

itunesRouetr.get("/audiobook", getAllAudiobook);

itunesRouetr.get("/software", getAllSoftware);

itunesRouetr.put("/fav", fav);

itunesRouetr.get("/search",search)
module.exports = itunesRouetr;
