var express = require('express');
var path = require("path");

var app = express();

var port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(port, function() {
  console.log('Server is running... PORT:' + port);
});