
import react, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { userContext } from './UserContext';

export default function UpdateChildern({ index }) {
    const { register, formState: { errors } } = useForm();
    const userCtx = useContext(userContext);


    return (
        <div >
            <div id="div1">
                <h4> ילד מספר {index + 1}</h4>
            </div>
            <div className="input-group input-group-sm">
                <span className="input-group-text" id="inputGroup-sizing-sm">הכנס תעודת זהות</span>
                <input {...register("childId", { required: true, maxLength: 9, minLength: 9 })}
                    defaultValue={userCtx.tzChildState[index]}
                    type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                        const tzs = userCtx.tzChildState;
                        tzs[index] = e.target.value;
                        userCtx.setTzChildState(tzs)
                    }
                    }
                />
            </div>
            {errors?.childId?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
            {errors?.childId?.type === "minLength" && (
                <p>מס' תז הינו באורך של לפחות 9 תוים</p>
            )}
            {errors?.childId?.type === "maxLength" && (
                <p>מס' תז הינו באורך של מקסימום 9 תוים</p>
            )}

            <div className="input-group input-group-sm">
                <span className="input-group-text" id="inputGroup-sizing-sm">הכנס שם פרטי</span>
                <input {...register("childName", { required: true, maxLength: 20 })}
                    defaultValue={userCtx.ChildNameState[index]}
                    type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                        const names = userCtx.ChildNameState;//catch the names array into a current array
                        names[index] = e.target.value;//put the name of the current child in uts place in the currebt array
                        userCtx.setChildNameState(names)//set the names array to the current names array
                    }
                    }
                />
            </div>
            {errors?.childName?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
            {errors?.childName?.type === "maxLength" && (
                <p>שם פרטי לא יכול להכיל יותר מ- 20 תווים</p>
            )}

            <div className="input-group input-group-sm">
                <span className="input-group-text" id="inputGroup-sizing-sm">הכנס תאריך לידה</span>
                <input {...register("childDate", { required: true })}
                    defaultValue={userCtx.dateOfBirthChildState[index]}
                    type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                        const dob = userCtx.dateOfBirthChildState;
                        dob[index] = e.target.value;
                        userCtx.setDateOfBirthChildState(dob)
                    }
                    }
                />
            </div>
            {errors?.childDate?.type === "required" && <p>שדה זה הינו שדה חובה</p>}
        </div>
    )
}