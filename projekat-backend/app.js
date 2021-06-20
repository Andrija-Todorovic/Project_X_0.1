require('dotenv').config();
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');

// .env data
const port = process.env.PORT

// !Putanja do fajla sa rutom
var pocetna = require('./routes/pocetna');
var kafici = require('./routes/kafici');
// Rute za registraciju
var registracija = require('./routes/registracija/registracija');
var reg_kafic = require('./routes/registracija/reg_kafic');
var reg_korisnik = require('./routes/registracija/reg_korisnik');
// Rute za login
var login = require('./routes/login/login');
var log_kafic = require('./routes/login/log_kafic')
var log_korisnik = require('./routes/login/log_korisnik');

// Koristi express
const app = express();

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// View engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// Rute
app.use('/', pocetna);
app.use('/kafici', kafici);
app.use('/registracija', registracija, reg_kafic, reg_korisnik);
app.use('/login', login, log_kafic, log_korisnik);

// Port na kome slusa
app.listen(port, () => {
    console.log(`Server slusa na portu ${port}`);
})