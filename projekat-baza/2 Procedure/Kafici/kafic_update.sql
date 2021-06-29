DELIMITER $$

CREATE PROCEDURE kafic_update(IN unos_id INT, 
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
    UPDATE kafici  SET kafic_naziv = kafic_naziv, 
						kafic_adresa = kafic_adresa,
						grad = grad,
                        drzava = drzava,
                        kapacitet = kapacitet,
                        slobodna_mesta = slobodna_mesta,
                        radno_vreme = radno_vreme,
                        kafic_opis = kafic_opis
    
    WHERE kafic_id = unos_id;
    
END$$

DELIMITER ;
