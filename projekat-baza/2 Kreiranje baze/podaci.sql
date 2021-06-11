/*Drzave
INSERT INTO drzave VALUES(1, 'Srbija');
INSERT INTO drzave VALUES(2, 'Severna Makedonija');
*/

/*Gradovi
INSERT INTO gradovi VALUES(1, 'Nis', (select drzava_id from drzave where drzava_ime = 'Srbija'));
INSERT INTO gradovi VALUES(2, 'Skoplje', (select drzava_id from drzave where drzava_ime = 'Severna Makedonija'));
INSERT INTO gradovi VALUES(3, 'Beograd', (select drzava_id from drzave where drzava_ime = 'Srbija'));
INSERT INTO gradovi VALUES(4, 'Kumanovo', (select drzava_id from drzave where drzava_ime = 'Severna Makedonija'));
*/

/*Korisnici
INSERT INTO korisnici VALUES(1, 'Milos', 'Naskovic', 'milosnaskovic@gmail.com');
INSERT INTO korisnici VALUES(2, 'Milos', 'Denic', 'denicmilos@gmail.com');
INSERT INTO korisnici VALUES(3, 'Andrija', 'Todorovic', 'andrijatodorovic@gmail.com');
*/