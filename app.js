'use strict';

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/node_modules', express.static('./node_modules/'));
app.use('/robots.txt', express.static('./robots.txt'));

app.use(function(req, res, next){
  res.status(404);
  res.end('404 Not Found');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
