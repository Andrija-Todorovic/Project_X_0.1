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

// Prikazi kafic
router.get('/:id', (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM kafici WHERE kafic_id = ${id}`;

  db.query(sql, function(err, result) {
    if (err){
      console.log(err);
    }
    else{
      res.render('kafici/kafic', {
        data: result,
        title: result[0].kafic_naziv,      
        style: '',
        js: ''
      });
    }
  });
});

// Azuriranje kafica
router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM kafici WHERE kafic_id = ${id}`;

  db.query(sql, function(err, result) {
    if (err){
      console.log(err);
    }
    else{
      res.render('kafici/kafic_update', {
        data: result,
        title: result[0].kafic_naziv,      
        style: '',
        js: ''
      });
    }
  });
});

router.put('/:id', isLoggedIn, (req, res) => {
  let id = req.params.id;

  let kafic_naziv = req.body.kafic_naziv;
  let kafic_adresa = req.body.kafic_adresa;
  let grad = req.body.grad;
  let drzava = req.body.drzava;
  let kapacitet = req.body.kapacitet;
  let slobodna_mesta = req.body.slobodna_mesta;
  let radno_vreme = req.body.radno_vreme;
  let kafic_opis = req.body.kafic_opis; 

  let sql = `UPDATE kafici SET ? WHERE kafic_id = ${id}`;

  db.query(sql, {
                  kafic_naziv: kafic_naziv,
                  kafic_adresa: kafic_adresa,
                  grad: grad,
                  drzava: drzava,
                  kapacitet: kapacitet,
                  slobodna_mesta: slobodna_mesta,
                  radno_vreme: radno_vreme,
                  kafic_opis: kafic_opis
                }, function(err, result) {
    if(err){
      console.log(err);
    }
    else {
        res.redirect(`/kafici/${id}`);
    }
  })

})

// Brisanje naloga 
router.delete('/:id', isLoggedIn, (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM kafici WHERE kafic_id = ${id}`;

  db.query(sql, function(err, result) {
    if (!err){
      res.redirect(`/kafici`);
    }
    else{
      console.log(err);
    }
  });
});




module.exports = router;