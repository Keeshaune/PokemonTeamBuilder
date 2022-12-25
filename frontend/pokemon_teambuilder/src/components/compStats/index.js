/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCompStats } from '../../actions'
import {fetchStats, calcTotalStats} from '../../helpers'


export const CompStats = () => {
    const compId = useSelector(state => state.dexReducer.compId)
    const compStats = useSelector(state => state.statsReducer.compStats)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchCompStats(compId)
    }, [compId])

    const fetchCompStats = async (id) => {
        dispatch(updateCompStats(await fetchStats(id)))
    }

    return (
        <div>   
            <div className="all-stats">
                <div className='stats-col-1'>
                    <p>HP: {compStats.hp}</p>
                    <p>Attack: {compStats.attack}</p>
                    <p>Defense: {compStats.defense}</p>
                </div>
                <div className='stats-col-2'>
                    <p>Sp Atk: {compStats["special-attack"]}</p>
                    <p>Sp Def: {compStats["special-defense"]}</p>
                    <p>Speed: {compStats.speed}</p>
                    <p>Total: {calcTotalStats(compStats)}</p>
                </div>
            </div>
        </div>
    ) 
}
