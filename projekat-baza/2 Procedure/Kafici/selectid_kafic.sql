DELIMITER $$

CREATE PROCEDURE kafic_select(IN unos_id INT)
BEGIN
    SELECT * FROM kafici WHERE kafic_id = unos_id;
END$$

DELIMITER ;
