import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Display, CompStats } from '../index'
import { changeCompId, hideCompare, showCompare } from '../../actions'


export const Compare = () => {
    const compId = useSelector(state => state.dexReducer.compId)
    const compOn = useSelector(state => state.dexReducer.compOn)
    const dispatch = useDispatch()
    
    const compareOn = () => {
        dispatch(changeCompId())
        dispatch(showCompare())
    }

    const compareOff = () => {
        dispatch(hideCompare())
    }

    return compOn ? (
        <>
            <Display display={compId}/>
            <CompStats />
            <button onClick={compareOn}>Compare</button>
            <button onClick={compareOff}>Close</button>
        </>
    )
    :
    (
            <button onClick={compareOn}>Compare</button>
    )
}
