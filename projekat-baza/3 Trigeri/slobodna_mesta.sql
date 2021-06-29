/*Nakon izvrsene rezervacije smanji broj slobodnih mesta */
/*DROP TRIGGER IF EXISTS slobodna_mesta;*/

DELIMITER $$
CREATE TRIGGER slobodna_mesta
AFTER INSERT ON rezervacija_kafic
FOR EACH ROW 
begin
	UPDATE kafici 
	SET kafici.slobodna_mesta = kafici.slobodna_mesta - NEW.broj_mesta
	where kafici.kafic_id = NEW.kafic_id;
end$$


