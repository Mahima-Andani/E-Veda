// importing necessary dependancies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./database/connection');

const app = express();

dotenv.config({ path : 'config.env'});

const port = 3000;
connectDB();

app.get('/', (req, res) => res.send('Hello!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));