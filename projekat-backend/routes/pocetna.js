const express = require('express');

// Koristi express
const router = express.Router();

// !RUTE
// Prikazi sve kafice
router.get('/', (req, res) => {
    res.render('pocetna', {
        title: 'Pocetna',
        style: '',
        js: ''
    });
});




module.exports = router;