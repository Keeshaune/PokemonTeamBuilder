const fetchPokemon = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pStats = {}
    data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
    const pokemon = {
        name: data.name,
        type: data.types.map(slot => slot.type.name),
        stats: pStats,
        img: data.sprites.other["official-artwork"].front_default
    }
    console.log(pStats)
    setPokemon(pokemon)
}

// <>
//         <h1>{pokemon.name}</h1>
//         <img src={pokemon.img} alt="pokemon"/>
//         <h1>Stats</h1>
//         <p>HP: {pokemon.stats.hp}</p>
//         <p>attack: {pokemon.stats.attack}</p>
//         <p>defence: {pokemon.stats.defense}</p>
//         <p>sp Atk: {pokemon.stats["special-attack"]}</p>
//         <p>sp Def: {pokemon.stats["special-defense"]}</p>
//         <p>Speed: {pokemon.stats.speed}</p>
//         <p>Type: {pokemon.type} </p>
//     </>
