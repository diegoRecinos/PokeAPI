document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
  const pokemonImage = document.getElementById('pokemonImage');
  const pokemonNameDisplay = document.getElementById('pokemonNameDisplay');
  const pokemonHeight = document.getElementById('pokemonHeight');
  const pokemonWeight = document.getElementById('pokemonWeight');
  const pokemonBaseExperience = document.getElementById('pokemonBaseExperience');
  const pokemonJson = document.getElementById('pokemonJson');

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Pokemon not found');
          }
          return response.json();
      })
      .then(data => {
          const { name, height, weight, base_experience, sprites } = data;
          pokemonImage.src = sprites.front_default;
          pokemonNameDisplay.textContent = `Name: ${name}`;
          pokemonHeight.textContent = `Height: ${height}`;
          pokemonWeight.textContent = `Weight: ${weight}`;
          pokemonBaseExperience.textContent = `Base Experience: ${base_experience}`;
          pokemonJson.textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          pokemonJson.textContent = error.message;
          pokemonImage.src = '';
          pokemonNameDisplay.textContent = '';
          pokemonHeight.textContent = '';
          pokemonWeight.textContent = '';
          pokemonBaseExperience.textContent = '';
      });
});