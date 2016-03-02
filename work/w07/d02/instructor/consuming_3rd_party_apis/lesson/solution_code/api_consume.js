var request = require('request'),
    opener  = require('opener'),
    locus   = require('locus');

var pokedex;
var bulbaURI;

var bulbasaur;

request('http://pokeapi.co/api/v1/pokedex/1/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    pokedex = JSON.parse(body);                // Catch them all without losing hours
    pokedex.pokemon.forEach(function(e,i) {    // of your life to a turtle squirrel.
      if (e.name === "bulbasaur") {
        bulbaURI = pokedex.pokemon[i].resource_uri;
        opener('http://www.pokeapi.co/' + bulbaURI);
      }
    })
  }
});

request('http://pokeapi.co/api/v1/pokemon/1/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    bulbasaur = JSON.parse(body); // ... or just start with Ivysaur.
    request('http://pokeapi.co' + bulbasaur.sprites[1].resource_uri, function(err, res, body) {
      if (!error && response.statusCode == 200) {
        // opener('http://pokeapi.co' + JSON.parse(body).image);
      }
    });
  }
});

//eval(locus);


// curl -i "https://api.github.com/repos/ga-students/WDI_DTLA_8/issues/"
// curl --silent "https://api.github.com/repos/ga-students/WDI_DTLA_8/issues/1" -u <valid_username>:<valid_password> | jsawk "return this.title + ': \n\n' + this.body"
// curl --silent "https://api.github.com/users/earnagram" | jsawk 'return this.bio'
// curl --request PATCH --data '{"bio": "string of some sort"}'  "https://api.github.com/user" -u un:password
