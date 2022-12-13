import { useState, useEffect } from "react"
import { Display } from "../display"

export const Pokedex = () => {
    const [pokeId, setPokeId] = useState(1)

    const handle_next = () => {
        setPokeId(prev => {
            if (prev == 905) return 1
            return prev+1
        })
    }
    const handle_prev = () => {
        setPokeId(prev => {
            if (prev == 1) return 905
            return prev-1
        })
    }

    return (
        <>
        {/* have two more displays here, one for index n-1 and one for index n+1
            each with the pokeId prop passed
            maybe use pokeId-1 and pokeId+1? */}
            <Display pokeId={pokeId}/>
            <button onClick={handle_prev}>Previous</button>
            <button onClick={handle_next}>Next</button>
        </>
    )
}
