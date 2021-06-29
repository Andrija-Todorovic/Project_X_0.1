const express = require('express');

// Koristi express
const router = express.Router();

// Korisnik middleware
const {isLoggedIn} = require('../middleware/isLogin_mid');

// Konekcija sa bazom
const db = require('../config/baza_konekcija');
const { query } = require('../config/baza_konekcija');

// !RUTE
// Prikazi formu
router.get('/', isLoggedIn, (req, res) => {
    let sql = 'SELECT * FROM kafici';

    db.query(sql, function(err, result) {
        if (err){
            console.log(err);
        }
        else{
            res.render('rezervacija', {
                data: result,
                title: 'Rezervacija',      
                style: '',
                js: 'provera_forma.js'
            });
        }
    });
});

router.post('/', isLoggedIn, (req, res) => {
    try{
        let nova_rezervacija = {
            kafic_id: req.body.kafic_id,
            korisnik_id:  req.session.passport.user.korisnik_id, //podatak je uzet iz sesije, sesija info o korisniku i uzmemo sta nam treba
            broj_mesta: req.body.broj_mesta,
            status: 'aktivan'
        };

        db.query(`INSERT INTO rezervacija_kafic set ?`, nova_rezervacija, function(error, rows){});
        return res.redirect('/rezervacija');
    } catch (err) {
        return res.redirect('/');
    }
})

module.exports = router;