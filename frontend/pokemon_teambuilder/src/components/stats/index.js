import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { updateStats, updateCompStats } from '../../actions'
import './index.css'

export const Stats = ({comp}) => {
    const pokeId = useSelector(state => state.dexReducer.id)
    const compId = useSelector(state => state.dexReducer.compId)
    const compOn = useSelector(state => state.dexReducer.compOn)
    const stats = useSelector(state => state.statsReducer.stats)
    const compStats = useSelector(state => state.statsReducer.compStats)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchStats(pokeId)
    }, [pokeId])

    useEffect(() => {
        fetchCompStats(compId)
    }, [compId])

    const fetchStats = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pStats = {}
        data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
        dispatch(updateStats(pStats))
    }

    const fetchCompStats = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pStats = {}
        data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
        dispatch(updateCompStats(pStats))
    }

    const calcStats = (stat, compStat) => {
        const diff = stat - compStat
        if (diff < 0) return `${stat} ${diff}`
        else if (diff > 0) return `${stat} +${diff}`
        else return stat
    }

    return comp ? (
        <div>   
            <div className="all-stats">
                <div className='stats-col-1'>
                    <p>HP: {stats.hp}</p>
                    <p>Attack: {stats.attack}</p>
                    <p>Defense: {stats.defense}</p>
                </div>
                <div className='stats-col-2'>
                    <p>Sp Atk: {stats["special-attack"]}</p>
                    <p>Sp Def: {stats["special-defense"]}</p>
                    <p>Speed: {stats.speed}</p>
                </div>
            </div>
        </div>
    ) : (
        <div>   
            <div className="all-stats">
                <div className='stats-col-1'>
                    <p>HP: {calcStats(stats.hp, compStats.hp)}</p>
                    <p>Attack: {calcStats(stats.attack, compStats.attack)}</p>
                    <p>Defense: {calcStats(stats.defense, compStats.defense)}</p>
                </div>
                <div className='stats-col-2'>
                    <p>Sp Atk: {calcStats(stats["special-attack"], compStats["special-attack"])}</p>
                    <p>Sp Def: {calcStats(stats["special-defense"], compStats["special-defense"])}</p>
                    <p>Speed: {calcStats(stats.speed, compStats.speed)}</p>
                </div>
            </div>
        </div>
    )
}
