import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdByName, fetchName } from "../../helpers";
import { set_id } from "../../actions";

export const Search = () => {
    const id = useSelector(store => store.dexReducer.id)
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleChange = async (e) => {
        try {
            const id = await fetchIdByName(e.target.value)
            dispatch(set_id(id))
            e.target.value = ""
        } catch (e) {
            return 
        }
    }

    useEffect(() => {
        updateName(id)
    }, [id])

    const updateName = async (id) => {
        setName(await fetchName(id))
    }
    
    return (
        <input type="text" onChange={handleChange} placeholder={name}></input>
    )
}
