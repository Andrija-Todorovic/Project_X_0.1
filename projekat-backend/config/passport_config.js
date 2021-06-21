const passport = require('passport');
const LocalStrategy   = require('passport-local').Strategy;
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');

// Konekcija sa bazom
const db = require('./baza_konekcija');

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });
    
    passport.use('kafic-login', new LocalStrategy({
            usernameField : 'kafic_email',
            passwordField : 'kafic_sifra',
            passReqToCallback : true 
        },
        function(req, kafic_email, kafic_sifra, done){
            let sql = `SELECT * FROM kafici WHERE kafic_email = '${kafic_email}'`;
            db.query(sql, function(err, result){
                if(err){
                    return done(err);
                }
                if(!result.length){
                    return done(null, false, req.flash('loginMessage', 'Korisnik sa unetim email adresom nije pronadjen.'));
                }
                if(!bcrypt.compareSync(kafic_sifra, result[0].kafic_sifra)){
                    return done(null, false);
                }
                return done(null, result[0]);
            });
        }
    ));
    
    passport.use('korisnik-login', new LocalStrategy({
            usernameField : 'korisnik_email',
            passwordField : 'korisnik_sifra',
            passReqToCallback : true 
        },
        function(req, korisnik_email, korisnik_sifra, done){
            let sql = `SELECT * FROM korisnici WHERE korisnik_email = '${korisnik_email}'`;
            db.query(sql, function(err, result){
                if(err){
                    return done(err);
                }
                if(!result.length){
                    return done(null, false, req.flash('loginMessage', 'Korisnik sa unetim email adresom nije pronadjen.'));
                }
                if(!bcrypt.compareSync(korisnik_sifra, result[0].korisnik_sifra)){
                    return done(null, false);
                }
                return done(null, result[0]);
            });
        }
    ));
    
}

