var express = require('express');
var path = require("path");
var app = express();
var passport = require("passport");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var path = require("path");
var api = require("./server/routes/api");
var authenticate = require("./server/routes/authenticate")(passport);

//Database
var mongoose = require("mongoose");
var configDB = require("./server/config/database.js");
mongoose.connect(configDB.url);
var port = process.env.PORT;

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));//?????

app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/', function(req, res) {
  res.render('index.ejs');
});

var bodyParser = require("body-parser");
var methodOverride= require("method-override");
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//route
app.use("/api", api);
app.use("/auth", authenticate);

//// Initialize Passport
var initPassport = require('./client/libs/passport/passport-init');
initPassport(passport);

app.listen(port, function() {
  console.log('Server is running... PORT:' + port);
});