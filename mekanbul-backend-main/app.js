const passport = require("passport");
require("./app_api/config/passport")
var express = require('express');
app.use(passport.initialize());
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('dotenv').config();
require('./app_api/models/db');
var apiRoute=require("./app_api/routes/index");
var app = express();
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

app.use(allowCrossDomain);

app.use(allowCrossDomain);

const PORT = 8000
app.get('/', (req, res) => {
  res.send('Asım Sinan Yüksel Hocama Saygılarımla')
})
app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api",apiRoute);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
