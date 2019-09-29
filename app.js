const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Simple Backend that queries the LinkedIn API to get words. 
 */
app.get('/words', async function(req, res) {
  const params = req.query;
  const response = await axios({
    baseURL: "http://app.linkedin-reach.io/",
    method: "get",
    url: "/words",
    params 
  });

  let words = response.data.split("\n");
  let data = {
    words
  };

  return res.json(data);
});

app.listen(3005, function() {
  console.log("App on port 3005");
});