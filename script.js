
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


//Fetch Function: The fetchPokemon() function makes an HTTP GET request to https://pokeapi.co/api/v2/pokemon/{pokemonName}.
//pokemonName is passed dynamically to the URL, allowing you to fetch any Pokémon by name (e.g., "pikachu").    
//The response is in JSON format, which you handle using await response.json().
//Display Function: The displayPokemon() function extracts relevant details like the Pokémon's name, height, weight, and image, and displays them inside a div element.
//Styling: The Pokémon's image and basic information (height, weight, etc.) are displayed in a simple layout using basic CSS.
