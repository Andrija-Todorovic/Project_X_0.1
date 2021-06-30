DELIMITER $$

CREATE PROCEDURE kafic_delete(IN unos_id INT)
BEGIN
    DELETE FROM kafici WHERE kafic_id = unos_id;
END$$

DELIMITER ;
