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
