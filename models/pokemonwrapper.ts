import { Pokemon } from "./pokemon";

type PokemonStat = {
    base_stat: number,
    effort: number,
    stat: {
        name: string
    }
}

type PokemonType = {
    slot: number,
    type: {
        name: string
    }
}

export class PokemonWrapper {
    name: string;
    id: string;
    image: string;
    stats: Array<PokemonStat>;
    types: Array<PokemonType>;
    sprites : {
        front_default: string,
        other: {
            "official-artwork" : {
                front_default: string
            }
        }
        versions: {
            "generation-v" : {
                "black-white": {
                    animated : {
                        front_default: string
                    }
                }
            }
        } 
    }

    constructor(pokemon: Pokemon){
        this.name = pokemon.name
        this.id = pokemon.url.split("/").reverse()[1]
        this.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+this.id+'.png'
        this.stats = []
        this.types = []
        this.sprites = {
            front_default : "",
            other: {
                "official-artwork" : {
                    front_default: ""
                }
            },
            versions : {
                "generation-v" : {
                    "black-white": {
                        animated : {
                            front_default: ""
                        }
                    }
                }
            }
        }
    }
}