const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const axios = require("axios");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const getIssTimes = (lat, long) => {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`;
  const response = axios
    .get(url)
    .then((response) => {
      const data = response.data.response;
      return data;
    })
    .catch((err) => {
      console.log("Sorry, could not find the ISS", err.message);
      return err;
    });
  return response;
};

app.get("/api/passtimes", (req, res) => {
  const lat = req.query.lat;
  const long = req.query.long;
  getIssTimes(lat, long).then((response) => res.json(response));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});
