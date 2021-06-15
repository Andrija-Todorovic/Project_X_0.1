const express = require('express');
const router = express.Router();

//Prikazuje sve restorane
router.get('/', (req, res) => {
    res.render('restorani', {
      title: 'Restorani',
      style: 'restorani.css',
      js: ''
    });
  });

module.exports = router;