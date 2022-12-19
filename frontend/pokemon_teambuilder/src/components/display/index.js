import { useState, useEffect } from "react"
import { fetchImg } from "../../helpers"
import './index.css'

export const Display = ({ display }) => {
    const [pokeImg, setPokeImg] = useState("")

    useEffect(() => {
        fetchPokemon(display)
    }, [display]) 

    const fetchPokemon = async (id) => {
        setPokeImg(await fetchImg(id))
    }

    return (
        <img src={pokeImg} alt="pokemon" className="display"/>
    )
}

 
