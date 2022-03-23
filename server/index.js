const express = require('express');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  helpers.getReposByUsername(req.body.query)
    .then((response) => {
      db.save(response.data);
    })
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      res.sendStatus(201);
    })
});

app.get('/repos', function (req, res) {
  return db.find()
    .then((repos) => {
      res.send(repos);
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

