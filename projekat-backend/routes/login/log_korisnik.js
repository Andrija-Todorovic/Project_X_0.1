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
router.get('/log_korisnik', (req, res) => {
    res.render('login/log_korisnik', {
        title: 'Login kao korisnik',
        style: '',
        js: 'provera_forma.js'
    });
});

// Logovanje korisnika
router.post('/log_korisnik', passport.authenticate('korisnik-login', {
    successRedirect : '/',
    failureRedirect : '/login/log_korisnik',
    failureMessage : true 
}), async(req, res) => {
	if (req.body.remember) {
		req.session.cookie.maxAge;
	} else {
		req.session.cookie.expires = false;
	}
	res.redirect('/');
});

// Logout
// router.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('success', 'Uspesno ste se odjavili');
//     res.redirect('/login');
// })


module.exports = router;