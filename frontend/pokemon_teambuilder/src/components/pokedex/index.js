import { useSelector, useDispatch } from "react-redux"
import { Display } from "../display"
import { increase_id, decrease_id } from "../../actions"
// import { BackDisplay } from "../backDisplay"
// import { NextDisplay } from "../nextDisplay"
import { Compare } from "../compare"
import { Stats } from "../stats"
import "./index.css"

export const Pokedex = () => {
    const id = useSelector(state => state.dexReducer.id)
    const dispatch = useDispatch()

    const handle_next = () => {
        dispatch(increase_id())
    }

    const handle_prev = () => {
        dispatch(decrease_id())
    }

    return (
        <>
            <div className="images">
                {/* <BackDisplay pokeId={pokeId-1} /> */}
                <Display display={id}/>
                {/* <NextDisplay pokeId={pokeId+1} /> */}
            </div>
            <Stats />
            <button onClick={handle_prev}>Previous</button>
            <button onClick={handle_next}>Next</button>
            <Compare />
        </>
    )
}
