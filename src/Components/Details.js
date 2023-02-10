import react, { useState, useContext } from 'react';//
import { useForm } from "react-hook-form";
import axios from 'axios';
import UpdateChildern from './UpdateChildern'
import { userContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import GoodBye from './GoodBye';

import Button from '@mui/material/Button'

export default function Details() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const userCtx = useContext(userContext);
    const [parentIdState, setParentIdState] = useState('');
    const [end, setEnd] = useState(false);

    const handle = (e) => {
        userCtx.setNumChildrenState(e);
        const a = [];
        for (let index = 0; index < e; index++) {
            a.push(<UpdateChildern key={index} index={index} />)
        }
        userCtx.setChildrenFormArr(a);
    }

    function onSubmit1() {
        axios.post('https://localhost:44357/User', {
            Name: userCtx.userNameState, FamilyName: userCtx.familyNameState, UserId: userCtx.TzState,
            DateOfBirth: userCtx.DateOfBirthState, Kind: userCtx.kindState, Hmo: userCtx.HMOState
        })
            .then(result => {
                console.log(result)

                setParentIdState(axios.get(`https://localhost:44357/User/${userCtx.TzState}`)
                    .then(result => {
                        console.log(result)

                        for (let index = 0; index < userCtx.numChildernState; index++) {
                            axios.post('https://localhost:44357/Child', {
                                Name: userCtx.ChildNameState[index], ChildId: userCtx.tzChildState[index],
                                DateOfBirth: userCtx.dateOfBirthChildState[index], ParentId: result.data.id
                            })
                                .then(result => {
                                    console.log(result)
                                })
                                .catch(error => {
                                    console.error(error.response.data);
                                });;
                        }
                    })
                    .catch(error => {
                        console.error(error.response.data);
                    }))
            })
            .catch(error => {
                console.error(error.response.data);
            });
        setEnd(true);
    }

    return (
        <div>
            <div id="div1">
                <h2>פרטי הורה</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit1)} style={{ width: "50%" }}>

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">הכנס שם פרטי</span>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        {...register("firstName", { required: true, maxLength: 20 })}
                        type="text" onChange={(e) => userCtx.setUserNameState(e.target.value)} defaultValue={userCtx.userNameState}></input>
                </div>
                {errors?.firstName?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
                {errors?.firstName?.type === "maxLength" && (
                    <p>שם פרטי לא יכול להכיל יותר מ- 20 תווים</p>
                )}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">הכנס שם משפחה</span>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        {...register("familyName", { required: true, maxLength: 20 })}
                        type="text" onChange={(e) => userCtx.setFamilyNameState(e.target.value)} defaultValue={userCtx.familyNameState} ></input>
                </div>
                {errors?.familyName?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
                {errors?.familyName?.type === "maxLength" && (
                    <p>שם משפחה לא יכול להכיל יותר מ- 20 תווים</p>
                )}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">הכנס מס' תעודת זהות</span>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        {...register("tz", { required: true, maxLength: 9, minLength: 9 })}
                        type="text" onChange={(e) => userCtx.setTzState(e.target.value)} defaultValue={userCtx.TzState} ></input>
                </div>
                {errors?.tz?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
                {errors?.tz?.type === "minLength" && (
                    <p>מס' תז הינו באורך של לפחות 9 תוים</p>
                )}
                {errors?.tz?.type === "maxLength" && (
                    <p>מס' תז הינו באורך של מקסימום 9 תוים</p>
                )}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">הכנס תאריך לידה</span>
                    <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        {...register("dateOfBirth", { required: true })}
                        type="date" onChange={(e) => userCtx.setDateOfBirthState(e.target.value)} defaultValue={userCtx.DateOfBirthState}></input>
                </div>
                {errors?.dateOfBirth?.type === "required" && <p>שדה זה הינו שדה חובה</p>}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">בחר מין</span>
                    <select className="form-select" aria-label="Default select example"
                        {...register("kind", { required: true, maxLength: 4 })}
                        type="text" onChange={(e) => userCtx.setKindState(e.target.value)} defaultValue={userCtx.kindState}>
                        <option value=""></option>
                        <option value="girl">בת</option>
                        <option value="boy">בן</option>
                    </select>
                </div>
                {errors?.kind?.type === "required" && <p>שדה זה הינו שדה חובה</p>}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">בחר קופת חולים</span>
                    <select className="form-select" aria-label="Default select example"
                        {...register("Hmo", { required: true })}
                        type="text" onChange={(e) => userCtx.setHMOState(e.target.value)} defaultValue={userCtx.HMOState} >
                        <option value=""></option>
                        <option value="leumit">לאומית</option>
                        <option value="clalit">כללית</option>
                        <option value="meuhedet">מאוחדת</option>
                        <option value="macabi">מכבי</option>
                    </select>
                </div>
                {errors?.Hmo?.type === "required" && <p>שדה זה הינו שדה חובה</p>}

                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg" >הכנס מס' ילדים</span>
                    <input type="number" onChange={(e) =>
                        handle(e.target.value)
                    } defaultValue={userCtx.numChildernState}
                    />
                </div>

                {userCtx.childrenFormArr}

                <input type="submit" />
            </form>
            {end && navigate('/GoodBye')}
        </div>
    )
}
