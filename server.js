const Express = require("express");
const App = Express();
const PORT = process.env.PORT || 8080;
const axios = require("axios");

require("dotenv").config();

const cors = require("cors");
App.use(cors());

const getIssTimes = async (lat, long) => {
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

App.get("/api/:lat&:long", async (req, res) => {
  const lat = req.params.lat;
  const long = req.params.long;
  const query = await getIssTimes(lat, long).then((response) => response);
  res.json(query);
});

App.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});
