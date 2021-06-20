const express = require('express');

// Koristi express
const router = express.Router();

// !RUTE
// Prikazi opcije za registraciju
router.get('/', (req, res) => {
    res.render('registracija/reg_pocetna', {
        title: 'Registracija',
        style: '',
        js: ''
    });
});

module.exports = router;