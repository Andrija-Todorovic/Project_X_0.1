const express = require('express');
const passport = require('passport');
const LocalStrategy   = require('passport-local').Strategy;
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');

// Koristi express
const router = express.Router();

// Konekcija sa bazom
const db = require('../../config/baza_konekcija');

// !Rute
// Prikazi formu
router.get('/log_kafic', (req, res) => {
    res.render('login/log_kafic', {
        title: 'Login kao kafic',
        style: '',
        js: 'provera_forma.js'
    });
});

// Logovanje korisnika
router.post('/log_kafic', passport.authenticate('kafic-login', {
    successRedirect : '/',
    failureRedirect : '/error',
    failureMessage : true 
}), async(req, res) => {
	if (req.body.remember) {
		req.session.cookie.maxAge;
	} else {
		req.session.cookie.expires = false;
	}
	res.redirect('/');
});


module.exports = router;