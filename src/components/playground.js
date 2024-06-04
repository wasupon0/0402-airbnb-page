const nums = [1, 2, 3, 4, 5];
const squared = nums.map((i) => i * i);
console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"];
const capNames = names.map((n) => n[0].toUpperCase() + n.slice(1));
console.log(capNames);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const pokemonTag = pokemon.map((i) => `<p>${i}</p>`);
console.log(pokemonTag);
