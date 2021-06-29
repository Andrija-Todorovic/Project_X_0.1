const express = require('express');
const bcrypt = require('bcryptjs');

// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../../config/baza_konekcija');

// !Rute
// Prikazi formu
router.get('/reg_kafic', (req, res) => {
    res.render('registracija/reg_kafic', {
        title: 'Registracija kafica',
        style: '',
        js: 'provera_forma.js'
    });
});

// Obradi podatke i smesti u bazu
router.post('/reg_kafic', async(req, res) => {
    try {
        let salt = bcrypt.genSaltSync(10);

        let novi_kafic = {
            kafic_naziv: req.body.kafic_naziv,
            kafic_email: req.body.kafic_email,
            kafic_sifra: bcrypt.hashSync(req.body.kafic_sifra, salt),
            kafic_adresa: req.body.kafic_adresa,
            grad: req.body.grad,
            drzava: req.body.drzava,
            kapacitet: req.body.kapacitet,
            slobodna_mesta: req.body.slobodna_mesta,
            radno_vreme: req.body.radno_vreme,
            kafic_opis: req.body.kafic_opis
        };

        // let kafic_naziv = req.body.kafic_naziv;
        // let kafic_email = req.body.kafic_email;
        // let kafic_sifra = bcrypt.hashSync(req.body.kafic_sifra, salt);
        // let kafic_adresa = req.body.kafic_adresa;
        // let grad = req.body.grad;
        // let drzava = req.body.drzava;
        // let kapacitet = req.body.kapacitet;
        // let slobodna_mesta = req.body.slobodna_mesta;
        // let radno_vreme = req.body.radno_vreme;
        // let kafic_opis = req.body.kafic_opis;

        db.query('INSERT INTO kafici set ?', novi_kafic, function(error, rows){})

        return res.redirect("/login");
    } catch(err){
        return res.redirect('/');
    }
});


module.exports = router;