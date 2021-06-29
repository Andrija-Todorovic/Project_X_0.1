DELIMITER $$

CREATE PROCEDURE korisnik_delete(IN unos_id INT)
BEGIN
    DELETE FROM korisnici WHERE korisnik_id = unos_id;
END$$

DELIMITER ;
