DELIMITER $$


CREATE TRIGGER status_prijave
AFTER UPDATE on kafici
FOR EACH ROW
BEGIN
	UPDATE rezervacija_kafic
	SET status = 'neaktivan' 
	WHERE  rezervacija_id = NEW.rezervacija_id ;
END$$

DELIMITER ;