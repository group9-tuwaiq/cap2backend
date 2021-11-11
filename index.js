const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const axios=require("axios");
dotenv.config();


app.get("/movies",(req,res)=>{
  axios.get("https://itunes.apple.com/search?term=all&media=movie")
  .then((response)=>{
      res.status(200).json(response.data)
  })
})
app.get("/songs",(req,res)=>{
  axios.get("https://itunes.apple.com/search?term=all&media=music")
  .then((response)=>{
      res.status(200).json(response.data)
  })
})


const PORT =  process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

