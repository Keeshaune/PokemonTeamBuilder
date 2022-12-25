/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStats, updateCompStats } from '../../actions'
import {fetchStats, calcStats, calcTotalStats} from '../../helpers'
import './index.css'

export const Stats = () => {
    const id = useSelector(state => state.dexReducer.id)
    const compId = useSelector(state => state.dexReducer.compId)
    const compOn = useSelector(state => state.dexReducer.compOn)
    const stats = useSelector(state => state.statsReducer.stats)
    const compStats = useSelector(state => state.statsReducer.compStats)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchPokeStats(id)
    }, [id])

    useEffect(() => {
        fetchCompStats(compId)
    }, [compId])

    const fetchPokeStats = async (id) => {
        dispatch(updateStats(await fetchStats(id)))
    }

    const fetchCompStats = async (id) => {
        dispatch(updateCompStats(await fetchStats(id)))
    }

    return compOn ? (
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
                    <p>Total: {calcStats(calcTotalStats(stats), calcTotalStats(compStats))}</p>
                </div>
            </div>
        </div>
    )
    : 
    (
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
