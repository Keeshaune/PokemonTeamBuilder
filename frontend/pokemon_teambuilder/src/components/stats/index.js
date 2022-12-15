import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './index.css'

export const Stats = () => {
    const [stats, setStats] = useState({})
    const [compStats, setCompStats] = useState({})
    const pokeId = useSelector(state => state.id)
    const compId = useSelector(state => state.compId)

    useEffect(() => {
        fetchStats(pokeId)
        fetchCompStats(compId)
    }, [pokeId, compId])

    const fetchStats = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pStats = {}
        data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
        const pokemon = {
            name: data.name,
            type: data.types.map(slot => slot.type.name),
            stats: pStats,
        }
        setStats(pokemon)
    }

    const fetchCompStats = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pStats = {}
        data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
        const pokemon = {
            stats: pStats,
        }
        console.log(pokemon)
        setCompStats(pokemon)
    }

    const calcStats = (stat, compStat) => {
        const diff = compStat - stat
        if (diff < 0) return `${stat} ${diff}`
        else if (diff > 0) return `${stat} +${diff}`
        else return stat
    }

    if (stats.stats) return (
        <div>   
            <p>{stats.name} - {stats.type}</p>
            <div className="all-stats">
                <div className='stats-col-1'>
                    <p>HP: {calcStats(stats.stats.hp, compStats.stats.hp)}</p>
                    <p>Attack: {calcStats(stats.stats.attack, compStats.stats.attack)}</p>
                    <p>Defense: {calcStats(stats.stats.defense, compStats.stats.defense)}</p>
                </div>
                <div className='stats-col-2'>
                    <p>Sp Atk: {calcStats(stats.stats["special-attack"], compStats.stats["special-attack"])}</p>
                    <p>Sp Def: {calcStats(stats.stats["special-defense"], compStats.stats["special-defense"])}</p>
                    <p>Speed: {calcStats(stats.stats.speed, compStats.stats.speed)}</p>
                </div>
            </div>
        </div>
    )
}
