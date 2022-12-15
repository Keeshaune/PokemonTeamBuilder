import React, {useEffect, useState} from 'react'
import { Display } from '../display'
import { Stats } from '../stats'

export const Compare = ({ pokeId }) => {
    const [compId, setCompId] = useState(pokeId)
    const [id, setId] = useState(pokeId)

    useEffect(() => {
        setCompId(pokeId)
    }, [pokeId])
    
    const handleClick = () => {
        setId(pokeId)
    }

    return (
        <>
            <Display pokeId={id}/>
            <Stats pokeId={compId} compId={compId}/>
            <button onClick={handleClick}>Compare</button>
        </>
        
    )
}
