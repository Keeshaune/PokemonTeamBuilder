import { useState, useEffect } from "react"
import axios from "axios"

export const BackDisplay = ({ pokeId }) => {
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
        <img src={pokeImg} alt="pokemon" className="img" />
    )
}

 
