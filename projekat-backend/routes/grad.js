const express = require('express');

// Koristi express
const router = express.Router();

// Korisnik middleware
const {isLoggedIn} = require('../middleware/isLogin_mid');

// Konekcija sa bazom
const db = require('../config/baza_konekcija');
const { query } = require('../config/baza_konekcija');

// !RUTE
// Prikazi sve kafice
router.get('/:grad', (req, res) => {
    let grad = req.params.grad;
  let sql = `call  kaficgrad_select('${grad}')`;

  db.query(sql, function(err, result) {
    if (err){
      console.log(err);
    }
    else{
      res.render('kafici/kafici', {
        data: result[0],
        title: 'Kafici',      
        style: '',
        js: ''
      });
    }
  });
});
// filter

module.exports = router;