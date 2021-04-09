const Express = require("express");
const App = Express();
const PORT = process.env.PORT || 8080;
const axios = require("axios");

require("dotenv").config();

const cors = require("cors");
App.use(cors());

const getIssTimes = async (long, lat) => {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`;
  const query = await axios
    .get(url)
    .then((response) => {
      const data = response.data.response;
      return data;
    })
    .catch((err) => {
      console.log("Could not find the ISS", err);
    });
  return query;
};

// pass in the location query with our api to the getWeather function - return json
App.get("/api/:long/:lat", async (req, res) => {
  const long = req.params.long;
  const lat = req.params.lat;
  const query = await getIssTimes(long, lat).then((response) => response);
  res.json(query);
});

App.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});
