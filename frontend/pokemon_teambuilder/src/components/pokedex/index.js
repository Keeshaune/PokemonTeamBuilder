import { useSelector, useDispatch } from "react-redux"
import { Display } from "../display"
import { increase_id, decrease_id, set_id } from "../../actions"
import { Compare } from "../compare"
import { Stats } from "../stats"
import { Search } from "../search"
import "./index.css"

export const Pokedex = () => {
    const id = useSelector(state => state.dexReducer.id)
    const dispatch = useDispatch()

    const handle_next = () => {
        if (id === 905) dispatch(set_id(1))
        else dispatch(increase_id())
    }

    const handle_prev = () => {
        if (id === 1) dispatch(set_id(905))
        else dispatch(decrease_id())
    }

    return (
        <>
            <div className="images">
                <Display display={id}/>
            </div>
            <Stats />
            <button onClick={handle_prev}>Previous</button>
            <Search />
            <button onClick={handle_next}>Next</button>
            <Compare />
        </>
    )
}
