const express = require('express');
const router = express.Router();

//Prikazuje sve kafice
router.get('/', (req, res) => {
    res.render('kafici', {
      title: 'Kafici',
      style: 'kafici.css',
      js: ''
    });
  });

module.exports = router;