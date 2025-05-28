const POKEMON_LIST_SIZE = 300;
const TOTAL_PAGES = 10;
( async () => {
  const fs = require('fs');

  const pokemonIds = Array.from({ length: POKEMON_LIST_SIZE }, (_, i) => i + 1);
  let fileContent = pokemonIds.map(id => `/pokemons/${id}`).join('\n');

  let pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
  fileContent += '\n' + pages.map(page => `/pokemons/page/${page}`).join('\n');

  const pokemonNameList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + POKEMON_LIST_SIZE ).then(res => res.json());
  fileContent += '\n' + pokemonNameList.results.map( pokemon => `/pokemons/${ pokemon.name }`).join('\n');

  fs.writeFileSync( './prerender-routes.txt', fileContent );
})();
