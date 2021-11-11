const express = require("express");
const {
  getAllMovies,
  getMovieById,
  getFavoriteMovie,
  createNewMovie,
  updateMovieDetails,
  deletemovie,
} = require("./../controllers/moviesController");

const getAllMoviesMiddleware = (req, res, next) => {
  console.log("get All Movies");
  next();
};

const movieRouter = express.Router();

movieRouter.get("/", getAllMoviesMiddleware, getAllMovies);

movieRouter.get("/:id", getMovieById);

movieRouter.get("/fav", getFavoriteMovie);

movieRouter.post("/", createNewMovie);

movieRouter.put("/:id", updateMovieDetails);

movieRouter.delete("/:id", deletemovie);

module.exports = movieRouter;
