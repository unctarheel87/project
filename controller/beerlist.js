const express = require('express');
const path = require('path');
const router = express.Router();
const Beer = require('../models/Beer');
//json data
const beer_list = require('../public/json/beer_list.json');

router.get('/seed', (req, res) => {
  Beer.insertMany(beer_list)
    .then(beer_document => {
      res.send('Database successfully seeded');
    }).catch(err => {
      console.log(err);
      res.end();
    })
});

router.get('/api/beerlist', (req, res) => {
  Beer.find({})
    .then(dbBeers => {
      res.json(dbBeers);
    }).catch(err => {
      console.log(err);
      res.end();
    })
});

router.get('*', (req, res) => {
  console.log(beer_list)
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;