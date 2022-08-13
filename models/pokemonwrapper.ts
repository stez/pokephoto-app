import { Pokemon } from "./pokemon";
import { getArtworkUrl } from "./utils"

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
        this.image = getArtworkUrl(this.id)
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