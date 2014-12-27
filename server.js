// server.js
var express        = require('express'),
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    path           = require('path'),
    app            = express();

var port,
    ipAddress;

var db = require('./config/db');
ipAddress = "127.0.0.1";
port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url);

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

require('./config/routes')(app); // configure our routes

app.use(bodyParser.json());
app.listen(port, ipAddress);
console.log('Magic happens on port 8080');      // shoutout to the user
