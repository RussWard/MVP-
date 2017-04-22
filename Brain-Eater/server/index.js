const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');

const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyParser.json());

app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../build')))

app.get('/api/getwisdom', function(req, res) {
  db('wisdom').select('*').then((data) => {

    res.send(data)
  })
})

app.get('/api/userWisdom/:userName', function(req, res) {
  db('wisdom').select('*').where({user: req.params.userName}).then((data) => {

    res.send(data)
  })
  console.log('THE PARAMS', req.params)
  // res.end();
})
app.post('/api/wisdom', function(req, res) {
  console.log(req.body);
  db('wisdom').insert({user: req.body.username, lesson: req.body.text}).then(() => {
   res.status(201).send()
  })
})
// app.get('/', function(req, res) {
//   res.render('tran')
// })

// app.get('/wisdom', function(req, res) {
//   db.select().table('wisdom').then((data) => {
//     res.send(data)
//   })
//   .catch((err) => {
//     console.error('Error getting data')
//     res.status(501).send(err)
//   })
// })

app.listen(PORT, () => {
  console.log('App is listening on: ', PORT)
})