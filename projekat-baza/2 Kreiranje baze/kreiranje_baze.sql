CREATE TABLE drzave (
	drzava_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT, /* Primarni kljuc je int tipa, nije prazno i mora da bude unikatan */
    drzava_ime VARCHAR(45) NOT NULL
);

CREATE TABLE gradovi (
	grad_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    grad_ime VARCHAR(45) NOT NULL,
    drzava INT,
    FOREIGN KEY (drzava) REFERENCES drzave(drzava_id) /* Za odredjeni grad daj id drzave u kome se taj grad nalazi */
);

CREATE TABLE kafici (
	kafic_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    kafic_ime VARCHAR(45) NOT NULL,
    kapacitet INT NOT NULL,
    slobodna_mesta INT NOT NULL, /* Pomocu trigera menjati broj slobodnih mesta, kada se to mesto oslobodi ili kada se to mesto rezervise/zauzme */
    radno_vreme VARCHAR(45),
    grad INT,
    FOREIGN KEY (grad) REFERENCES gradovi (grad_id)
);

CREATE TABLE proizvodi (
    proizvod_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    proizvod_naziv VARCHAR(45) NOT NULL,
    cena INT NOT NULL
);

CREATE TABLE meni (
	kafic INT,
    proizvod INT,
    FOREIGN KEY (kafic) REFERENCES kafici (kafic_id),
    FOREIGN KEY (proizvod) REFERENCES proizvodi (proizvod_id)
);

CREATE TABLE korisnici (
	korisnik_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    korisnik_ime VARCHAR(45) NOT NULL,
    korisnik_prezime VARCHAR(45) NOT NULL,
    email_adresa VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE rezervacija (
    rezervacija_id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
    kafic INT,
    korisnik INT,
	FOREIGN KEY (kafic) REFERENCES kafici (kafic_id),
    FOREIGN KEY (korisnik) REFERENCES korisnici (korisnik_id),
    rezervacija_datum DATETIME /* Mora da se aktivira na triger, kada se napravi rezervacija ti stavi datum i vreme */
);

/* 
	Napraviti procedure koje ce da rade CRUD za kafice, korisnike ili proizvode 
	Za meni napraviti na;in brisanja, ukoliko neki proizvod vise nije u ponudi. 
*/ 