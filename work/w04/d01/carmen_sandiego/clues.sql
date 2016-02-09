------------------------------------------------------------------------
-- "We're counting on you, gumshoe!"
-- Chief Lynne Thigpen
--
-- Find out where Carmen Sandiego's headed, send us the info, and we'll
-- be sure to nab her before she can steal more ridiculous landmarks!
------------------------------------------------------------------------


-- Clue #1: We recently got word that someone fitting Carmen's
-- description has been traveling through Southern Europe. She's most
-- likely traveling someplace where she won't be noticed, so find the
-- least populated country in the Southern Europe region, and we'll
-- start looking for her there.
SELECT name, population, region, code FROM countries WHERE region = 'Southern Europe';

--vatican city

-- Clue #2: Now that we're here, we have insight that Carmen was seen
-- attending language classes in this country's officially recognized
-- language. Check our databases and find out what language is spoken
-- in this country, so we can call in a translator to work with you.

SELECT country_code, language FROM countries_languages WHERE country_code = 'VAT';

--italian



-- Clue #3: We have new news on the classes Carmen attended – our
-- gumshoes tell us she's moved on to a different country, a country
-- where people speak only the language she was learning. Find out which
-- nearby country has 100% of its population speak that language. It
-- may take more than one search to get the country's name.
--
-- Note: http://www.postgresql.org/docs/8.2/static/functions-logical.html

SELECT * FROM countries_languages WHERE language = 'Italian' AND percentage = 100;

--San Marino



-- Clue #4: We're booking the first flight out – maybe we've actually
-- got a chance to catch her this time. There are only two cities she
-- could be flying to in the country. One is named the same as the
-- country, and that would be two obvious. We're following our gut on
-- this one; find out what other city in that country she might be
-- flying to.

SELECT * FROM cities WHERE country_code = 'SMR';

--Serravalle

--
-- Note: http://www.postgresql.org/docs/9.1/static/functions-comparison.html


-- Clue #5: Oh no, she pulled a switch – there are two cities with very
-- similar names, but in totally different parts of the globe! She's
-- headed to South America as we speak; go find a city whose name begins
-- with the same 4 letters as the one we were headed to, but doesn't end
-- the same. Find out the city, and do another search for what country
-- it's in.
--
-- Note: http://www.postgresql.org/docs/8.3/static/functions-matching.html

SELECT * FROM cities WHERE name LIKE 'Serr%';

--SERRA, brazil

-- Clue #6: We're close! Our South American agent says she just got a
-- taxi at the airport, and is headed towards the capital! Look up the
-- country's capital, and get there pronto! Do as many searches as
-- necessary to get the name of the city and we'll follow right behind
-- you!

SELECT * FROM countries WHERE name = 'Brazil';

SELECT * FROM cities WHERE id = 211;

--Barbacena, Brazil


-- Clue #7: She knows we're on to her – her taxi dropped her off at the
-- international airport, and she beat us to the boarding gates. We can
-- still catch her, however, we just have to know where she's heading.
-- This one is difficult, and should take a few searches: we know she
-- is heading to a country where some people speak the same language as
-- the one she's in. She wants to get far away, but can't make it too
-- far, so we suspect that it's also a country in the North America
-- region. If there's more than one we'll have to split our resources:
-- you go to the one with a greater population!

SELECT * FROM countries_languages WHERE country_code = 'BRA';

SELECT * FROM  countries_languages WHERE language = 'German' OR language =  'Indian Language' OR
 language =  'Italian' OR language =  'Japanese'  OR language = 'Portuguese';

SELECT * FROM countries WHERE region = 'North America';

--USA

-- Clue #8: Lucky for us, she's getting sloppy. Our other operatives
-- have found out that while her ticket said 'Ca', it wasn't for Canada.
-- Find a district in your current country that begins with those
-- letters.

SELECT * FROM cities WHERE district LIKE 'Ca%';

--CALIFORNIA


-- Clue #9: After we got so close before, she probably wants to head for
-- a city that she can get lost in. Find a city in your district that is
-- bigger than the city she was in last (from Clue #6).

SELECT * FROM cities WHERE id = 211;

--113079

SELECT * FROM cities WHERE population > 113079 AND district = 'California' ORDER BY population;


-- Clue #10: We're really getting close now! It looks like we're right
-- on her heels! She noticed us coming, though, and left town today.
-- She must be close by, but still trying to hide. Find the next biggest
-- city in the same district: she has to be there!
---
-- Note: http://www.postgresql.org/docs/9.5/static/queries-order.html

SELECT *
FROM
  cities
WHERE
  district
LIKE
  'California'
AND
  country_code = 'USA'
AND
  population > 113079
ORDER BY
  population ASC
LIMIT
  2;

--PALMDALE

-- Did you find her??

SELECT
  region, AVG(population) AS avg_population
FROM
  countries
GROUP BY
  region
ORDER BY
  avg_population;


SELECT
  *
FROM
  countries JOIN countries_languages
ON
  countries.code = countries_languages.country_code;
