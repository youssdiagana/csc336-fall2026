let pokemon;

// Get Pokemon information from the API
async function getPokemon(id) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    // Check if the Pokemon exists
    if (!response.ok) {
        alert("Pokemon not found!");
        return null;
    }

    let json = await response.json();
    return json;
}

// Set up the canvas and loads Bulbasaur first as the default
async function setup() {
    let canvas = createCanvas(450, 350);
    canvas.parent("canvasContainer");

    pokemon = await getPokemon(1);
    showPokemon();
}

// Updates the Pokemon name and image
function showPokemon() {
    if (pokemon) {
        document.getElementById("pokemonName").innerText =
            pokemon.name + " #" + pokemon.id;

        document.getElementById("pokemonImage").src =
            pokemon.sprites.front_default;
    }
}

// Allows the search for a different Pokemon
async function changePokemon() {
    let name = document.getElementById("pokemonSearch").value;

    // Get the new Pokemon from the API
    let newPokemon = await getPokemon(name);

    if (newPokemon) {
        pokemon = newPokemon;
        showPokemon();
    }
}

// Draw the Pokemon's stats
function draw() {
    background(255);

    if (pokemon) {

        // Get the stats from the API 
        let hp = pokemon.stats[0].base_stat;
        let attack = pokemon.stats[1].base_stat;
        let defense = pokemon.stats[2].base_stat;
        let speed = pokemon.stats[5].base_stat;

        // title
        fill(40);
        textSize(20);
        text("Base Stats", 165, 35);

        // HP bar
        fill(255, 80, 80);
        rect(130, 70, hp * 2, 35);

        // Attack bar
        fill(255, 170, 50);
        rect(130, 130, attack * 2, 35);

        // Defense bar
        fill(80, 150, 255);
        rect(130, 190, defense * 2, 35);

        // Speed bar
        fill(80, 200, 120);
        rect(130, 250, speed * 2, 35);

        // Stat labels and numbers
        fill(40);
        textSize(16);

        text("HP", 30, 95);
        text("Attack", 30, 155);
        text("Defense", 30, 215);
        text("Speed", 30, 275);

        text(hp, 135 + hp * 2, 95);
        text(attack, 135 + attack * 2, 155);
        text(defense, 135 + defense * 2, 215);
        text(speed, 135 + speed * 2, 275);
    }
}
