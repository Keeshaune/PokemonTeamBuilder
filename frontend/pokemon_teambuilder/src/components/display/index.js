import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import './index.css'

export const Display = ({ display }) => {
    const [pokeImg, setPokeImg] = useState("")

    useEffect(() => {
        fetchPokemon(display)
    }, [display]) 

    const fetchPokemon = async (id) => {
        if (id === 0) id = 905
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const img = data.sprites.other["official-artwork"].front_default
        setPokeImg(img)
    }

    return (
        <img src={pokeImg} alt="pokemon" className="display"/>
    )
}

 
