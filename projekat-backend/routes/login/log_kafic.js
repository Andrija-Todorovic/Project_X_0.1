const express = require('express');


// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../../config/baza_konekcija');

// Passport


// !Rute
// Prikazi formu
router.get('/log_kafic', (req, res) => {
    res.render('login/log_kafic', {
        title: 'Login kao kafic',
        style: '',
        js: ''
    });
});

// Ulogovanje kafica
router.post('/log_kafic', async(req, res) => {

})


module.exports = router;