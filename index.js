const express = require('express');
const app = express();

// load config from dot env file
require('dotenv').config();
const port = process.env.PORT || 8000;

// connect to the database
const db = require('./config/mongoose');
db();

const expressLayouts = require('express-ejs-layouts');

// middleware to parse html request body
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// start server
app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  }
  console.log(`Server is running on port: ${port}`);
});