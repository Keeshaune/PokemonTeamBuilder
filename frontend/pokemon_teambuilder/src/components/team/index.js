import React from "react";
import { useSelector } from "react-redux";
import { Display } from "../display";

export const Team = () => {
    const slots = useSelector(store => store.teamReducer.slots)

    return (
        <>
            {slots.map( id => <Display display={id}/>)}
        </>
    )
}
