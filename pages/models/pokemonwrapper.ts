import { Pokemon } from "./pokemon";

export class PokemonWrapper {
    name: string;
    id: string;
    image: string;

    constructor(pokemon: Pokemon){
        this.name = pokemon.name
        this.id = pokemon.url.split("/").reverse()[1]
        this.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+this.id+'.png'
    }
}