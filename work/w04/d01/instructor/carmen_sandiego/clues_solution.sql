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

SELECT code, name FROM countries WHERE region = 'Southern Europe' ORDER BY population LIMIT 1;
-- VAT, Holy See (Vatican City State)

-- Clue #2: Now that we're here, we have insight that Carmen was seen
-- attending language classes in this country's officially recognized
-- language. Check our databases and find out what language is spoken
-- in this country, so we can call in a translator to work with you.

SELECT language FROM countries_languages WHERE country_code = 'VAT';
-- Italian

-- Clue #3: We have new news on the classes Carmen attended – our
-- gumshoes tell us she's moved on to a different country, a country
-- where people speak only the language she was learning. Find out which
-- nearby country has 100% of its population speak that language. It
-- may take more than one search to get the country's name.
--
-- Note: http://www.postgresql.org/docs/8.2/static/functions-logical.html

SELECT country_code FROM countries_languages WHERE language = 'Italian' AND percentage = 100;
-- SMR
SELECT name FROM countries WHERE code = 'SMR';
-- San Marino

-- Clue #4: We're booking the first flight out – maybe we've actually
-- got a chance to catch her this time. There are only two cities she
-- could be flying to in the country. One is named the same as the
-- country, and that would be two obvious. We're following our gut on
-- this one; find out what other city in that country she might be
-- flying to.
--
-- Note: http://www.postgresql.org/docs/9.1/static/functions-comparison.html

SELECT name FROM cities WHERE country_code = 'SMR' AND name <> 'San Marino';
-- Serravalle

-- Clue #5: Oh no, she pulled a switch – there are two cities with very
-- similar names, but in totally different parts of the globe! She's
-- headed to South America as we speak; go find a city whose name begins
-- with the same 4 letters as the one we were headed to, but doesn't end
-- the same. Find out the city, and do another search for what country
-- it's in.
--
-- Note: http://www.postgresql.org/docs/8.3/static/functions-matching.html

SELECT name FROM cities WHERE country_code = 'SMR' AND name <> 'San Marino';
-- Serravalle

SELECT name, country_code FROM cities WHERE name LIKE 'Serr%' AND country_code <> 'SMR';
-- Serra, BRA
SELECT name FROM countries WHERE code = 'BRA';
-- Brazil

-- Clue #6: We're close! Our South American agent says she just got a
-- taxi at the airport, and is headed towards the capital! Look up the
-- country's capital, and get there pronto! Do as many searches as
-- necessary to get the name of the city and we'll follow right behind
-- you!

SELECT capital FROM countries WHERE code = 'BRA';
-- 211
SELECT name FROM cities WHERE id = 211;
-- Brasília

-- Clue #7: She knows we're on to her – her taxi dropped her off at the
-- international airport, and she beat us to the boarding gates. We can
-- still catch her, however, we just have to know where she's heading.
-- This one is difficult, and should take a few searches: we know she
-- is heading to a country where some people speak the same language as
-- the one she's in. She wants to get far away, but can't make it too
-- far, so we suspect that it's also a country in the North America
-- region. If there's more than one we'll have to split our resources:
-- you go to the one with a greater population!

SELECT country_code FROM countries_languages WHERE language = 'Portuguese';
-- AND, BRA, CAN, CPV, FRA, GNB, LUX, MAC, PRT, PRY, TMP, USA
SELECT name, code, population FROM countries WHERE region = 'North America';
-- Bermuda                   | BMU  |      65000
-- Canada                    | CAN  |   31147000
-- Greenland                 | GRL  |      56000
-- Saint Pierre and Miquelon | SPM  |       7000
-- United States             | USA  |  278357000

-- the overlap is CAN & USA, and USA is bigger!

-- we could also have done:
-- SELECT
--   name
-- FROM
--   countries_languages JOIN countries ON country_code = code
-- WHERE
--   language = 'Portuguese' AND region = 'North America'
-- ORDER BY
--   population DESC
-- LIMIT 1;

-- Clue #8: Lucky for us, she's getting sloppy. Our other operatives
-- have found out that while her ticket said 'Ca', it wasn't for Canada.
-- Find a district in your current country that begins with those
-- letters.

SELECT district FROM cities WHERE country_code = 'USA' AND district ILIKE 'CA%';
-- … GROUP BY district;
-- California

-- Clue #9: After we got so close before, she probably wants to head for
-- a city that she can get lost in. Find a city in your district that is
-- bigger than the city she was in last (from Clue #6).

SELECT population FROM cities WHERE name = 'Brasília';
-- 1969868
SELECT name FROM cities WHERE district = 'California' AND population > 1969868;
-- Los Angeles!

-- Clue #10: We're really getting close now! It looks like we're right
-- on her heels! She noticed us coming, though, and left town today.
-- She must be close by, but still trying to hide. Find the next biggest
-- city in the same district: she has to be there!
---
-- Note: http://www.postgresql.org/docs/9.5/static/queries-order.html

SELECT name, population FROM cities WHERE district = 'California' ORDER BY population DESC;
-- …
-- San Diego!
-- …

-- Did you find her??

