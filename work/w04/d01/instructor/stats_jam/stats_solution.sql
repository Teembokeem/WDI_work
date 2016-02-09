-- 1. All columns for all players from the New York Knicks (NYK)

SELECT * FROM players WHERE team = 'NYK';


-- 2. All columns for all players from the Indiana Pacers (IND) who are
--    under 26 years old.

SELECT * FROM players WHERE team = 'IND' AND age < 26;


-- 3. All columns for all players, ordered from least points scored to
--    most points scored.

SELECT * FROM players ORDER BY points;


-- 4. Name and Points per game (points/games), for the players with the
--    top 20 points per game.

SELECT name, (points / games) AS ppg FROM players ORDER BY ppg DESC LIMIT 20;


-- 5. The average age for all players.

SELECT AVG(age) FROM players;


-- 6. The average age for all players on the Oklahoma City Thunder (OKC).

SELECT AVG(age) FROM players WHERE team = 'OKC';


-- 7. The average age for all players who played more than 40 games.

SELECT AVG(age) FROM players WHERE games > 40;


-- 8. The team and total points scored FROM all players on that team
--    (team points), ordered from most team points to least.

SELECT team, SUM(points) as team_points FROM players group by team ORDER BY team_points DESC;


-- 9. Age and the the average points per game for that age, ordered from
--    oldest to youngest

SELECT age, AVG(points / games) FROM players GROUP BY age ORDER BY age;


-- 10. Team and the the number of players who have a scoring average
--     (points per game) above 12 on that team, ordered FROM most to
--     least.

SELECT team, COUNT(*) as high_scorers FROM players WHERE ( points / games ) > 12 GROUP BY team ORDER BY high_scorers DESC;
