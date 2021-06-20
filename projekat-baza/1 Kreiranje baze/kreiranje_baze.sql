CREATE TABLE kafici (
	kafic_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    kafic_naziv VARCHAR(50) NOT NULL,
    kafic_email VARCHAR(50) NOT NULL UNIQUE,
	kafic_sifra VARCHAR(255) NOT NULL,
    kafic_adresa VARCHAR(50) NOT NULL,
    grad VARCHAR(45) NOT NULL,
    drzava VARCHAR(45) NOT NULL,
    kapacitet INT NOT NULL,
    slobodna_mesta INT NOT NULL,
    radno_vreme VARCHAR(45) NOT NULL
);

CREATE TABLE korisnici (
	korisnik_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    korisnik_ime VARCHAR(50) NOT NULL,
    korisnik_prezime VARCHAR(50) NOT NULL,
    korisnik_email VARCHAR(50) NOT NULL,
    korisnik_sifra VARCHAR(255) NOT NULL,
    korisnik_datum_rodjenja DATE NOT NULL,
    korisnik_pol ENUM('m', 'f') NOT NULL
);