DELIMITER $$

CREATE PROCEDURE kaficgrad_select(IN unos_grad VARCHAR(45))
BEGIN
    SELECT * FROM kafici WHERE grad = unos_grad;
END$$

DELIMITER ;
