const express = require('express');

// Koristi express
const router = express.Router();

// !Rute
// Prikazi formu
router.get('/', (req, res) => {
    res.render('login/log_pocetna', {
        title: 'Login',
        style: '',
        js: ''
    });
});


module.exports = router;