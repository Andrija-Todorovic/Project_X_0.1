const express = require('express');

// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../config/baza_konekcija');

// !RUTE
// Prikazi sve kafice
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM kafici';

    db.query(sql, function(err, result) {
      if (err){
        console.log(err);
      }
      else{
        res.render('kafici/kafici', {
          data: result,
          title: 'Kafici',      
          style: '',
          js: ''
        });
      }
    });
});




module.exports = router;