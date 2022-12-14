import { useState } from "react"
import { Display } from "../display"
import { BackDisplay } from "../backDisplay"
import { NextDisplay } from "../nextDisplay"
import { Stats } from "../stats"
import "./index.css"

export const Pokedex = () => {
    const [pokeId, setPokeId] = useState(1)

    const handle_next = () => {
        setPokeId(prev => {
            if (prev === 905) return 1
            return prev+1
        })
    }
    const handle_prev = () => {
        setPokeId(prev => {
            if (prev === 1) return 905
            return prev-1
        })
    }

    return (
        <>
            <div className="images">
                <BackDisplay pokeId={pokeId-1} />
                <Display pokeId={pokeId} />
                <NextDisplay pokeId={pokeId+1} />
            </div>
            <Stats pokeId={pokeId}/>
            <button onClick={handle_prev}>Previous</button>
            <button onClick={handle_next}>Next</button>
        </>
    )
}
