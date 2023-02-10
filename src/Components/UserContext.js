import { createContext, useState } from "react";


export const userContext = createContext();

export default function UserContext(props) {
    const [userNameState, setUserNameState] = useState();
    const [familyNameState, setFamilyNameState] = useState();
    const [TzState, setTzState] = useState();
    const [DateOfBirthState, setDateOfBirthState] = useState();
    const [kindState, setKindState] = useState();
    const [HMOState, setHMOState] = useState();
    const [ChildNameState, setChildNameState] = useState([]);
    const [tzChildState, setTzChildState] = useState([]);
    const [dateOfBirthChildState, setDateOfBirthChildState] = useState([]);
    const [numChildernState, setNumChildrenState] = useState(0);
    const [childrenFormArr, setChildrenFormArr] = useState([])

    return (

        <userContext.Provider value={{
            userNameState, setUserNameState, familyNameState, setFamilyNameState,
            TzState, setTzState, DateOfBirthState, setDateOfBirthState, kindState, setKindState, HMOState, setHMOState,
            ChildNameState, setChildNameState, tzChildState, setTzChildState, dateOfBirthChildState, setDateOfBirthChildState,
            numChildernState, setNumChildrenState, childrenFormArr, setChildrenFormArr
        }}>
            {props.children}
        </userContext.Provider>
    )

}