const IMAGE_PATH = ''

function getArtworkUrl(id: number | string) : string {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'
}

export {IMAGE_PATH, getArtworkUrl}