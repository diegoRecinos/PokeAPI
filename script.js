
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


fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())  // Convert response to JSON
  .then(data => {

    console.log(data);  // Log the JSON object
        // Now you can use the data in your app
      });
    // Fetch the Pokémon data from the API
    async function fetchPokemonData(pokemonName) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        const data = await response.json();
        displayJSON(data);  // Display the JSON on the page
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        document.getElementById('json-output').innerText = "Error fetching data.";
      }
    }

    // Display the JSON data on the page
function displayJSON(jsonData) {
    const jsonOutput = document.getElementById('json-output');
    jsonOutput.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;
      // The second parameter (2) is for formatting the JSON with indentation
}

// Fetch and display data for Pikachu
fetchPokemonData('pikachu');
