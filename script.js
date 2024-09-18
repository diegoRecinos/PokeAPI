
// Function to fetch Pokémon data
async function fetchPokemon(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  if (!response.ok) {
    document.getElementById('pokemon-data').innerHTML = "Pokémon not found!";
    return;
  }
  const pokemon = await response.json();
  displayPokemon(pokemon);
}

// Function to display Pokémon data
function displayPokemon(pokemon) {
  const pokemonDataDiv = document.getElementById('pokemon-data');
  pokemonDataDiv.innerHTML = `
    <div class="pokemon">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <div>
        <h2>${pokemon.name}</h2>
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <p><strong>Base Experience:</strong> ${pokemon.base_experience}</p>
      </div>
    </div>
  `;
}

// Fetch and display data for Pikachu
fetchPokemon('pikachu');
