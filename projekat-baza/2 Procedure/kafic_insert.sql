DELIMITER $$

CREATE PROCEDURE kafic_insert(IN unos_id INT, 
							IN kafic_naziv VARCHAR(50), 
							IN kafic_adresa VARCHAR(50), 
							IN grad VARCHAR(45),
                            IN drzava VARCHAR(45),
                            IN kapacitet INT,
                            IN slobodna_mesta INT,
                            IN radno_vreme VARCHAR(45),
                            IN kafic_opis VARCHAR(255)
							)
BEGIN
    INSERT INTO korisnici (kafic_naziv, kafic_adresa, grad, drzava, kapacitet,slobodna_mesta, radno_vreme, kafic_opis) 
    VALUES ( kafic_naziv, kafic_adresa, grad, drzava, kapacitet, slobodna_mesta, radno_vreme, kafic_opis);
    
END$$

DELIMITER ;