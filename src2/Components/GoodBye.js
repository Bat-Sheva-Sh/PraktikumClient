import { useEffect, useContext } from "react"
import {userContext} from "./UserContext";


export default function () {

    const userCtx = useContext(userContext);

    useEffect(() => {
        userCtx.setUserNameState('')
        userCtx.setFamilyNameState('')
        userCtx.setTzState('')
        userCtx.setDateOfBirthState('')
        userCtx.setKindState('')
        userCtx.setHMOState('')
        userCtx.setChildNameState('')
        userCtx.setTzChildState('')
        userCtx.setDateOfBirthChildState('')
        userCtx.setNumChildrenState('')
        userCtx.setChildrenFormArr([])
    }, [])
    return (
        <h1>הפרטים נשמרו בהצלחה!!</h1>
    )
}