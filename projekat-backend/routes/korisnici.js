const express = require('express');

// Koristi express
const router = express.Router();

// Korisnik middleware
const {isLoggedIn} = require('../middleware/isLogin_mid');

// Konekcija sa bazom
const db = require('../config/baza_konekcija');
const { query } = require('../config/baza_konekcija');

// !RUTE
// Prikazi korisnika
router.get('/:id', (req, res) => {
  let id = req.params.id;
  //let sql = `SELECT * FROM korisnici WHERE korisnik_id = ${id}`;

  db.query(`call korisnikid_select('${id}')`, function(err, result) {
    if (err){
      console.log(err);
    }
    else{
      res.render('korisnici/korisnik', {
        data: result[0],
        title: result[0].korisnik_ime,      
        style: '',
        js: ''
      });
    }
  });
});

// Izmena podataka
router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  //let sql = `SELECT * FROM korisnici WHERE korisnik_id = ${id}`;

  db.query(`call korisnikid_select('${id}')`, function(err, result) {
    if (err){
      console.log(err);
    }
    else{
      res.render('korisnici/korisnik_update', {
        data: result[0],
        title: result[0].kafic_naziv,      
        style: '',
        js: ''
      });
    }
  });
});

router.put('/:id', isLoggedIn, (req, res) => {
  let id = req.params.id;

  let korisnik_ime = req.body.korisnik_ime;
  let korisnik_prezime = req.body.korisnik_prezime;
  let korisnik_datum_rodjenja = req.body.korisnik_datum_rodjenja;
  let korisnik_pol = req.body.korisnik_pol;

  //let sql = `UPDATE korisnici SET ? WHERE korisnik_id = ${id}`;

  db.query(`call korisnik_update('${id}', '${korisnik_ime}', '${korisnik_prezime}', '${korisnik_datum_rodjenja}', '${korisnik_pol}')`,  function(err, result) {
    if(err){
      console.log(err);
    }
    else {
        res.redirect(`/korisnik/${id}`);
    }
  })

})

// Brisanje naloga 
router.delete('/:id', isLoggedIn, (req, res) => {
  let id = req.params.id;
  //let sql = `DELETE FROM korisnici WHERE korisnik_id = ${id}`;

  db.query(`call korisnik_delete('${id}')`, function(err, result) {
    if (!err){
      res.redirect(`/`);
    }
    else{
      console.log(err);
    }
  });
});




module.exports = router;