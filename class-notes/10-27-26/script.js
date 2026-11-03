let pokemon;

async function getPokemon(id) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    let json = await response.json();
    return json;
}



async function setup() {
    console.log("p5 call")
    createCanvas(600,400);

    background(255,0,0);

    fill(0, 0, 255);
    rect(100, 50, 50, 50);

    let pokemonData = await getPokemon(1)
    console.log(pokemonData.sprites.front_default);
    pokemon = {
        x: 100,
        y: 200,
        img: pokemonData.sprites.front_default,
        id: 1
    }
}

function draw() {
    image(pokemon.img, pokemon.x, pokemon,y);

}