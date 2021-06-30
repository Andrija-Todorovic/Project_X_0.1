DELIMITER $$

CREATE PROCEDURE korisnik_insert(
							IN korisnik_ime varchar(50),
							IN korisnik_prezime varchar(50), 
							IN korisnik_email varchar(50), 
							IN korisnik_sifra varchar(255), 
							IN korisnik_datum_rodjenja date,
							IN korisnik_pol enum('m','f')
							)
BEGIN
    INSERT INTO korisnici (korisnik_ime, korisnik_prezime, korisnik_email, korisnik_sifra, korisnik_datum_rodjenja, korisnik_pol) 
    VALUES (korisnik_ime, korisnik_prezime, korisnik_email, korisnik_sifra, korisnik_datum_rodjenja, korisnik_pol);
END$$

DELIMITER ;