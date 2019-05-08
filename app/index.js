const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const path = require('path');
const Routes = require('./routes');

const app = express();
const server = http.createServer(app);
const port = 3000;
server.timeout = 0; // set server timeout to infinity.
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
  extended: true
}));
/** ******
To serve the static files
  ******* */
app.use(express.static(path.join(__dirname, '../public')));

/** ******
To serve the angularJS application
  ******* */
app.get('/', function (req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});
/** ******
To serve the service API
  ******* */
app.use('/api', new Routes());


/** ******
Listen the port at 3000
  ******* */
server.listen(port, (err) => {
  if (err) console.log('Error while starting server!!', err);
  else console.log('Server started and listening on Port:', port);
});

process.on('unhandledRejection', (reason) => {
  console.log('unhandledRejection....', reason);
});