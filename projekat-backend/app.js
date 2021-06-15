require('dotenv').config()
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

// Putanja do fajla sa rutom
var pocetna = require('./routes/pocetna');
var kafici = require('./routes/kafici');
var restorani = require('./routes/restorani');

// Korisni express 
const app = express()

//.env data
const port = process.env.PORT;

// View engine
app.engine('ejs', ejsMate); //Koristi se za kreiranje templejta u ejs (boilerplate nece raditi bez njega)
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

//routes
app.use('/', pocetna);
app.use('/kafici', kafici);
app.use('/restorani', restorani);

// Port na kome slusa
app.listen(port, () => {
  console.log(`Server listen at port ${port}`)
});

/* Planirane rute za pocetak
    pocetna 
    restorani 
    resotrani/:id
    restorani/:id/rezervacija 
    kafici 
    kafici/:id/
    kafici/:id/rezervacija
    login
    registracija/korisnik
    registracija/poslodavac 
    log out 
*/