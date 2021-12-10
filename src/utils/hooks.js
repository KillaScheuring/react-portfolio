import {useState} from "react";

export const useToggle = (initialState=false) => {
    const [toggle, setToggle] = useState(initialState)
    const handleToggle = (override) => setToggle(prevState => {
        if (typeof override === "boolean") return override
        return !prevState
    })
    return [toggle, handleToggle]
}
