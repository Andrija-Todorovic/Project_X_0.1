const express = require('express');

// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../../config/baza_konekcija');

// !Rute
// Prikazi formu
router.get('/log_korisnik', (req, res) => {
    res.render('login/log_korisnik', {
        title: 'Login kao korisnik',
        style: '',
        js: ''
    });
});


module.exports = router;