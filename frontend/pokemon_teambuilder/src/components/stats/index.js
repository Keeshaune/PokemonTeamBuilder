import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Stats = ({ pokeId }) => {
    const [stats, setStats] = useState({})

    useEffect(() => {
        fetchStats(pokeId)
    }, [pokeId])

    const fetchStats = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pStats = {}
        data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
        const pokemon = {
            name: data.name,
            type: data.types.map(slot => slot.type.name),
            stats: pStats,
        }
        console.log(pStats)
        setStats(pokemon)
    }
    return (
        <div>   
            <p>HP: {stats.stats.hp}</p>
            <p>Attack: {stats.stats.attack}</p>
            <p>Defense: {stats.stats.defense}</p>
            <p>Sp Atk: {stats.stats["special-attack"]}</p>
            <p>Sp Def: {stats.stats["special-defense"]}</p>
            <p>Speed: {stats.stats.speed}</p>
        </div>
    )
}
