/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {fetchStats, calcTotalStats} from '../../helpers'


export const TeamStats = () => {
    const team = useSelector(state => state.teamReducer)
    const [stats, setStats] = useState({})

    useEffect(() => {
        getStats(team)
    }, [team])

    const getStats = async (team) => {
        setStats(await calcTeamStats(team))
    }

    const calcTeamStats = async (team) => {
        const stats = await Promise.all(team.slots.map( async (id) => await fetchStats(id)))
        const totalStats = stats.reduce((stats, poke) => {
            for (let stat in poke) {
                if (!stats[stat]) stats[stat] = poke[stat]
                else stats[stat] += poke[stat]
            }
            return stats
        }, {})
        const avgStats = {}
        for (let key in totalStats) {
            avgStats[key] = Math.round(totalStats[key]/stats.length)
        }
        return avgStats
    }

    return (
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
                    <p>Total: {calcTotalStats(stats)}</p>
                </div>
            </div>
        </div>
    ) 
}
