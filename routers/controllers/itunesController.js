const fs = require("fs");
const axios = require("axios");

let usersInfo = [];

fs.readFile("./db/users.json", (err, data) => {
  usersInfo = JSON.parse(data.toString());
});

const accessFile = (content) => {
  fs.writeFile("./db/users.json", JSON.stringify(content), (err, data) => {
    console.log(err);
    console.log("appended on file");
  });
};

const getAllMovies = (req, res) => {
 // const media=req.body.media;
  axios
    .get(`https://itunes.apple.com/search?term=all&media=movie`)
    .then((response) => {
      res.status(200).json(response.data);
    });
};

const getAllMusic = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((response) => {
      res.status(200).json(response.data);
    });
};
const getAllPodcast = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=podcast")
    .then((response) => {
      res.status(200).json(response.data);
    });
};
const getAllTvshow = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=tvshow")
    .then((response) => {
      res.status(200).json(response.data);
    });
};
const getAllEbook = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=ebook")
    .then((response) => {
      res.status(200).json(response.data);
    });
};
const getAllAudiobook = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=audiobook")
    .then((response) => {
      res.status(200).json(response.data);
    });
};
const getAllSoftware = (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=software")
    .then((response) => {
      res.status(200).json(response.data);
    });
};

const fav = (req, res) => {
  const userId = req.body.userId;
  const mediaId = req.body.mediaId;
  const favItems = [];
  const found = usersInfo.find((user) => user.userId == userId);
  const index = usersInfo.indexOf(found);
  usersInfo.forEach((item, index) => {
    if (userId == item.userId) {
      const user = {
        userId,
        password: item.password,
        username: item.username,
        favorite: [...item.favorite, mediaId],
      };
      usersInfo.splice(index, 1, user);
      accessFile(usersInfo);
      res.status(200).json(usersInfo);
    } else {
      // sign in page
    }
  });
};

const search=(req,res)=>{
  const searchVal = req.body.value;
  const mediaType=req.body.mediaType;
  axios
    .get(`https://itunes.apple.com/search?term=all&media=${mediaType}`)
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
}
module.exports = {
  getAllMovies,
  getAllMusic,
  fav,
  search
};
