var express = require('express');
var axios = require('axios');

var date = new Date().toString();

var app = express();

var static = require('serve-static');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

var ejs = require('ejs');
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
  res.render('test.ejs');
});

app.get('/2', function(req, res){
  res.render('test2.ejs');
});

app.get('/3', function(req, res){
  res.render('main.ejs');
});

// Memo

const mongoose = require('mongoose');
mongoose.connect('mongodb://ye:asdf4567@ds215759.mlab.com:15759/rkskekfkak');

var Board = require('./models/board');

app.post('/assets/php/send.php', function(req, res){
  var board = new Board({
    title: req.body.inputTitle,
    time: req.body.inputTime,
    place: req.body.inputPlace,
    content: req.body.inputContent,
    });
  board.save(function(err){
    console.log('l ')
    res.redirect('/');
  });
});

app.listen(3000, function(req, res){
  console.log('Server is Working.');
});
