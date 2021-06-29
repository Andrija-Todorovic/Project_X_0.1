DELIMITER $$

CREATE PROCEDURE korisnikid_select(IN unos_id INT)
BEGIN
    SELECT * FROM korisnici WHERE korisnik_id = unos_id;
END$$

DELIMITER ;
