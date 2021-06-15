const express = require('express');
const router = express.Router();

//Prikazuje pocetnu stranu
router.get('/', (req, res) => {
    res.render('pocetna', {
      title: 'Pocetna',
      style: 'pocetna.css',
      js: ''
    });
  });

module.exports = router;