const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
dotenv.config();
app.use(express.json());


app.get("/movies", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=movie")
    .then((response) => {

      // console.log(movies);
      res.status(200).json(response.data);
    });
});

app.get("/songs", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((response) => {
      //  console.log(songs);
      res.status(200).json(response.data);
    });
  
});

//// Search Function
app.get("/search", (req, res) => {
  const searchVal = req.body.value;

  axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((response) => {
      let result = response.data.results.filter((item) => {
        return (
          item.trackName.toLowerCase() == searchVal.toLowerCase() ||
          item.artistName.toLowerCase() == searchVal.toLowerCase()
        );

        // console.log(ele);
      });
      res.status(200).json(result);
    });
});


    
app.get("/music", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/podcast", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=podcast")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/tvShow", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=tvShow")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/ebook", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=ebook")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/audiobook", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=audiobook")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/software", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=software")
    .then((response) => {
      res.status(200).json(response.data);
    });
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);

});

