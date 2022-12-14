import { useState, useEffect } from "react"
import axios from "axios"

export const Display = ({ pokeId }) => {
    // const [pokemon, setPokemon] = useState({
    //     name: "bulbasaur",
    //     type: "grass",
    //     stats: {
    //         hp: 45,
    //         attack: 49,
    //         defense: 49,
    //         "special-attack": 65,
    //         "special-defense": 65,
    //         speed: 45
    //     },
    //     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    // })
    const [pokeImg, setPokeImg] = useState("")

    useEffect(() => {
        fetchPokemon(pokeId)
    }, [pokeId]) 

    const fetchPokemon = async (id) => {
        if (id === 0) id = 905
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const img = data.sprites.other["official-artwork"].front_default
        setPokeImg(img)
    }

    return (
        <img src={pokeImg} alt="pokemon"/>
    )
}

 
