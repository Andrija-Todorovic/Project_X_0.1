const express = require('express');
const bcrypt = require('bcryptjs');

// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../../config/baza_konekcija');

// !RUTE
// Prikazi formu
router.get('/reg_korisnik', (req, res) => {
    res.render('registracija/reg_korisnik', {
        title: 'Registracija korisnika',
        style: '',
        js: 'provera_forma.js'
    });
});

// Obradi podatke i smesti u bazu
router.post('/reg_korisnik', async(req, res) => {
    try {
        let salt = bcrypt.genSaltSync(10);

        let novi_korisnik = {
            korisnik_ime: req.body.korisnik_ime,
            korisnik_prezime: req.body.korisnik_prezime,
            korisnik_email: req.body.korisnik_email,
            korisnik_sifra: bcrypt.hashSync(req.body.korisnik_sifra, salt),
            korisnik_datum_rodjenja: req.body.korisnik_datum_rodjenja,
            korisnik_pol: req.body.korisnik_pol
        };

        db.query('INSERT INTO korisnici set ?', novi_korisnik, function(error, rows){})
        
        return res.redirect("/login");
    } catch(err){
        return res.redirect('/');
    }
});



module.exports = router;