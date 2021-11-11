const fs = require("fs");

let movies = [];

fs.readFile("./db/movies.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    movies = JSON.parse(data.toString());
  }
});

const getAllMovies = (req, res) => {
  res.status(200).json(movies);
};
const getMovieById = (req, res) => {
  const id = req.params.id;
  const found = movies.find((movie) => movie.id == id);

  res.status(200).json(found);
};

const getFavoriteMovie = (req, res) => {
  res.status(200).json(movies.filter((movie) => movie.isFav));
};

const createNewMovie = (req, res) => {
  const movie = {
    id: movies.length + 1,
    name: req.body.name,
    isFav: false,
    isDel: false,
  };
  movies.push(movie);

  fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      res.status(400).json("bad request");
    } else {
      res.status(200).json(movies);
    }
  });
};

const updateMovieDetails = (req, res) => {
  const { id } = req.params;
  const { name, isDel, isFav } = req.body;
  let check = false;

  movies.forEach((movie) => {
    if (movie.id == id) {
      if (name != undefined) movie.name = name;
      if (isDel != undefined) movie.isDel = isDel;
      if (isFav != undefined) movie.isFav = isFav;
      check = true;
    }
  });

  if (check) {
    fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(movies);
      }
    });
  } else {
    res.status(404).json("movie not found");
  }
};

const deletemovie = (req, res) => {
  const { id } = req.params;
  let check = false;

  movies.forEach((movie) => {
    if (movie.id == id) {
      movie.isDel = true;
      check = true;
    }
  });

  if (check) {
    fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(movies);
      }
    });
  } else {
    res.status(404).json("movie not found");
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getFavoriteMovie,
  createNewMovie,
  updateMovieDetails,
  deletemovie,
};
