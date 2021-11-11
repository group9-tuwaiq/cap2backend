const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// router
const movieRouter = require("./routers/routes/moviesRoute");

const app = express();

//app level middleware
app.use(express.json());
const appMiddleware = (req, res, next) => {
  console.log("appMiddleware");
  next();
};
app.use(appMiddleware);
app.use(cors());

app.use(morgan("dev"));

// router level middleware
const movieMiddleware = (req, res, next) => {
  console.log("movies");
  next();
};

//third party middleware

//routers level middleware
app.use("/movies", movieMiddleware, movieRouter);

const PORT = 4000;
// process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

