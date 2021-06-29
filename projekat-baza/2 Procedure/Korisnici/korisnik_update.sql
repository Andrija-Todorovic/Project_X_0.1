DELIMITER $$

CREATE PROCEDURE korisnik_update(IN unos_id INT, 
							IN korisnik_ime varchar(50), 
							IN korisnik_prezime varchar(50), 
							IN korisnik_datum_rodjenja date,
                            IN korisnik_pol enum('m','f')
							)
BEGIN
    UPDATE korisnici  SET korisnik_ime = korisnik_ime, 
						korisnik_prezime = korisnik_prezime,
						korisnik_datum_rodjenja = korisnik_datum_rodjenja,
                        korisnik_pol = korisnik_pol
    
    WHERE korisnik_id = unos_id;
    
END$$

DELIMITER ;