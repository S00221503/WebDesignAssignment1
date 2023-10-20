const express = require('express')

require('dotenv').config();
require('./Database');
// note this required a .env file which is not in github

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const {Test} = require('./models/test')