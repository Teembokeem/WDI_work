-- 1.  All columns for all players from the New York Knicks (NYK).

SELECT name, team FROM players WHERE team = 'NYK';



-- 2.  All columns for all players from the Indiana Pacers (IND) who are
--     under 26 years old.

SELECT name, team, age FROM players WHERE team = 'IND' AND age < 26;

-- 3.  All columns for all players, ordered from least points scored to
--     most points scored.

SELECT name, points FROM players ORDER BY points;


-- 4.  Name and Points per game (points/games), for the players with the
--     top 20 points per game.

SELECT name, points, games, points/games AS avgpoints FROM players ORDER BY avgpoints DESC LIMIT 20;


-- 5.  The average age for all players.

SELECT AVG(age) FROM players;

-- 6.  The average age for all players on the Oklahoma City Thunder (OKC).

SELECT AVG(age) FROM players WHERE team = 'OKC';

-- 7.  The average age for all players who played more than 40 games.

SELECT AVG(age) FROM players WHERE games >= 40;

### Bonus

-- Once you finish the above, you can try to add the following to your
-- `stats.sql` file:

-- 1.  The team and total points scored from all players on that team
--     (team points), ordered from most team points to least.

SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM(points) DESC ;

-- 2.  The age and the average points per game for that age, ordered from
--     youngest to oldest for all ages.

SELECT age, AVG(points) FROM players GROUP BY age ORDER BY age DESC;



-- 3.  The team and then the number of players who score above 12 points per
--     game on that team, ordered from the most number of players to the
--     least number of players.

SELECT team, COUNT(points/games) FROM players WHERE points/games > 12 GROUP BY team ORDER BY COUNT(points/games) DESC;
