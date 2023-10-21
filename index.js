const express = require('express');
const { WeatherData } = require('./Database'); // Import the WeatherData model
const app = express();
const port = process.env.PORT || 3001;

app.get('/weather', (req, res) => {
  WeatherData.find({}, (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});