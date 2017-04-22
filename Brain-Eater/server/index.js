const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');

const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyParser.json());

app.set('views', __dirname + '/client/src/components/index');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('./client/src/components/index')
})

app.get('/wisdom', function(req, res) {
  db.select().table('wisdom').then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.error('Error getting data')
    res.status(501).send(err)
  })
})

app.listen(PORT, () => {
  console.log('App is listening on: ', PORT)
})