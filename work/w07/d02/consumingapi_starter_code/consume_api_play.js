// require request, locus, and opener modules.
var request = require('request'),
    locus   = require('locus'),
    opener  = require('opener');

var pokedex;
var bulbasaur;
var bulbaURI;
// Catch them all without losing hours of your life to a squirrel turtle.
 request('http://pokeapi.co/api/v2/pokedex/2', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    pokedex = JSON.parse(body);
    // bulbasaur = pokedex.pokemon_entries.find(function(pokemon) {
    //   return "jynx" === pokemon.pokemon_species.name
    // });
    // console.log(bulbasaur);
// ORRRRRRR
    pokedex.pokemon_entries.forEach(function(pokemon) {
      if (pokemon.pokemon_species.name === "jynx") {
        jynx = pokemon;
      }
    });
     console.log(jynx);
  }
});

 //open the bulbasaur sprite
 request('http://pokeapi.co/api/v1/pokemon/1', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    bulbasaur = JSON.parse(body);
    console.log(bulbasaur.sprites[0].resource_uri);

    request('http://pokeapi.co' + bulbasaur.sprites[0].resource_uri, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        bulbaURI = JSON.parse(body);
        console.log(bulbaURI);
        opener('http://pokeapi.co' + bulbaURI.image)
      }
    });
  }
 });


// ... or just start with Bulbasaur.
// request('http://pokeapi.co/api/v2/pokemon/1', function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     bulbasaur = JSON.parse(body);
//     console.log(bulbasaur);
//   }
// });
