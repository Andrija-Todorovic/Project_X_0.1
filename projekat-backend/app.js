require('dotenv').config()
const express = require('express');
const app = express()

//.env data
const port = process.env.PORT;


//routes
app.get('/', (req, res) => {
  res.send('Helloo World!')
})

/*
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

app.listen(port, () => {
  console.log(`Server listen at port ${port}`)
})