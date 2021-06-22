require('dotenv').config();
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
require('./config/passport_config')(passport);

// .env data
const port = process.env.PORT

// !Putanja do fajla sa rutom
var pocetna = require('./routes/pocetna');
var kafici = require('./routes/kafici');
var korisnik = require('./routes/korisnici');
// Rute za registraciju
var registracija = require('./routes/registracija/registracija');
var reg_kafic = require('./routes/registracija/reg_kafic');
var reg_korisnik = require('./routes/registracija/reg_korisnik');
// Rute za login
var login = require('./routes/login/login');
var log_kafic = require('./routes/login/log_kafic')
var log_korisnik = require('./routes/login/log_korisnik');

// Middleware
const {isLoggedIn} = require('./middleware/isLogin_mid');

// Koristi express
const app = express();

// Method Override
app.use(methodOverride('_method'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Express Session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    cookie: { 
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: false }
  }));
  
// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// Flash
app.use(flash());

// View engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// Rute
app.use('/', pocetna);
app.use('/kafici', kafici);
app.use('/korisnik', korisnik);
app.use('/registracija', registracija, reg_kafic, reg_korisnik);
app.use('/login', login, log_kafic, log_korisnik);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})

// Port na kome slusa
app.listen(port, () => {
    console.log(`Server slusa na portu ${port}`);
})