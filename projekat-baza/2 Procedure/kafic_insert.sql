DELIMITER $$

CREATE PROCEDURE kafic_insert( 
							IN kafic_naziv VARCHAR(50),
                            IN kafic_email varchar(50),
                            IN kafic_sifra varchar(255),
							IN kafic_adresa VARCHAR(50), 
							IN grad VARCHAR(45),
                            IN drzava VARCHAR(45),
                            IN kapacitet INT,
                            IN slobodna_mesta INT,
                            IN radno_vreme VARCHAR(45),
                            IN kafic_opis VARCHAR(255)
							)
BEGIN
	INSERT INTO kafici (kafic_naziv, kafic_email, kafic_sifra, kafic_adresa, grad, drzava, kapacitet,slobodna_mesta, radno_vreme, kafic_opis) 
    VALUES (kafic_naziv, kafic_email, kafic_sifra, kafic_adresa, grad, drzava, kapacitet,slobodna_mesta, radno_vreme, kafic_opis);
END$$

DELIMITER ;