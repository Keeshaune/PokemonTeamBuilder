/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchType } from "../../helpers";
import Types from "../../images";

export const Type = ( { id } ) => {
    
    const [pokeType, setPokeType] = useState([])

    useEffect(() => {
        fetchPokemon(id)
    }, [id]) 

    const fetchPokemon = async (id) => {
        setPokeType(await fetchType(id))
    }

    return (
        <> 
            {pokeType.map( type => <img className="type-image" src={Types[type]} alt="type"/>)} 
        </>
    )
}
