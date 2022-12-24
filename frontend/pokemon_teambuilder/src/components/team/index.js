import React from "react";
import { useSelector } from "react-redux";
import { Display } from "../display";

export const Team = () => {
    const team = useSelector(state => state.teamReducer)

    return (
        <>
            {team.slots.map( id => <Display display={id}/>)} 
        </>
    )
}
