/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { fetchAdvs } from "../../helpers"
import Types from "../../images/index" 
import "./index.css"

export const Coverage = ({ team }) => {
    const [advantages, setAdvantages] = useState(new Set())

    useEffect(() => {
        fetchPokemonAdvs(team.slots)
    }, [team]) 

    const fetchPokemonAdvs = async (pokemon) => {
            const types = await Promise.all(pokemon.map( async poke => await fetchAdvs(poke)))
            setAdvantages(new Set(types.flat()))
    }

    return (
        <div>
            {Object.keys(Types).map( type => {
                if (!advantages.has(type)) return <img src={Types[type]} alt={`${type}`} className="noAdvantage"/>
                else return <img src={Types[type]} alt={`${type}`} className="advantage"/>
            })} 
        </div>
    )
}
