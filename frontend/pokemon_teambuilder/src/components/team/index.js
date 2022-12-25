import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Display } from "../display";
import { set_id } from "../../actions";
import { TeamStats } from "../teamStats";

export const Team = () => {
    const team = useSelector(state => state.teamReducer)
    const dispatch = useDispatch()

    const selectPoke = (e) => {
        const id = +e.target.src.split('/').pop().split('.')[0]
        dispatch(set_id(id))
    }

    return (
        <div>
            <ul>
                {team.slots.map( id => <li onClick={selectPoke}><Display display={id}/></li>)} 
            </ul>
            <TeamStats />
        </div>
        
    )
}
