import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Display } from "../display";

export const Team = () => {
    const slots = useSelector(store => store.teamReducer.slots)
    const [team, setTeam] = useState([])
    
    useEffect(() => {
        console.log("slots", slots)
        setTeam(slots)
        console.log("team", team)
    }, [slots])    

    return (
        <>
            {/* {team.map( id => <Display display={id}/>)} */}
            <Display display={slots[0]} />
            {/* <Display display={slots[1]} /> */}
        </>
    )
}
