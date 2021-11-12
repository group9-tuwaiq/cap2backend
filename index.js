const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
dotenv.config();
app.use(express.json());
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

app.get("/movies", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=movie")
    .then((response) => {
      res.status(200).json(response.data);
    });
});
app.get("/songs", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=music")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.put("/fav", (req, res) => {
  const userId = req.body.userId;
  const mediaId = req.body.mediaId;
  const favItems = [];
  const found=usersInfo.find(user=>user.userId==userId);
  const index=usersInfo.indexOf(found);
  usersInfo.forEach((item, index) => {
    if (userId == item.userId) {
      const user={
        userId,
        password:item.password,
        username:item.username,
        favorite:[...item.favorite,mediaId]
      }
      usersInfo.splice(index,1,user);
      accessFile(usersInfo);
      res.status(200).json(usersInfo);
    } else {
      // sign in page
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
