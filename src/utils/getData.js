const getListDataPoke = async () => {
    // Agregando para ver si se guardan en local storage o ya esta guardado ahi
    const dtoSavedInLocalStorage = localStorage.getItem("listPokemon");

    if (dtoSavedInLocalStorage) return JSON.parse(dtoSavedInLocalStorage);

    let response = [];

    await fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
        .then(a => a.json())
        .then(a => response = a)
        .catch(a => alert("Error en la peticion."));
    
    
    const dto = [];

    for (const item of response.results) {
        const id = item.url.split("/")[item.url.split("/").length - 2]; 
        dto.push({
            id,
            name: capitalizarPrimeraLetra(item.name),
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
    }

    localStorage.setItem("listPokemon", JSON.stringify(dto));
    return dto;
};

const getDetailDataPoke = async (pokemonId) => {
    let response = {};

    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(a => a.json())
        .then(a => response = a)
        .catch(a => alert("Error en la peticion."));
    
    return response;
};

const getHabilidadDataPoke = async (habilidadId) => {
    let response = {};

    await fetch(`https://pokeapi.co/api/v2/ability/${habilidadId}/`)
        .then(a => a.json())
        .then(a => response = a)
        .catch(a => alert("Error en la peticion."));
    
    return response;
}



function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



export {
    getDetailDataPoke,
    getListDataPoke,
    getHabilidadDataPoke
};