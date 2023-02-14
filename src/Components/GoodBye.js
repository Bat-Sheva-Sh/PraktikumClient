import { useEffect, useContext, useState } from "react"
import { userContext } from "./UserContext";
import axios from 'axios';
import { Button } from "@mui/material";
import ExportToExcel from './ExportToExcel'

export default function () {
    const [toDown, setToDown] = useState();
    const [myBool, setMyBool] = useState(false);
    const [excelExportData, setExcelExportData] = useState([]);

    const userCtx = useContext(userContext);
    const tz = localStorage.getItem(1);

    function Export() {
        setToDown(axios.get(`https://localhost:44357/User/${tz}`)
            .then(
                (result) => {
                    var data = JSON.stringify(result.data)
                    data=`[${data}]`
                    JSON.parse(data)
                    console.log('reault: ', result)
                    console.log('mydata:' , data)
                    setExcelExportData(data)
                    console.log('ExcelExportData: ', excelExportData)
                    setMyBool(true)
                }
            )
            .catch((error) => {
                console.error(error);
            })
        )
    }

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
        <>
            <h1>הפרטים נשמרו בהצלחה!!</h1>
            {myBool && <ExportToExcel excelData={excelExportData} fileName={"Excel Export"}></ExportToExcel>}
            <Button onClick={Export} variant="contained"
                style={{ cursor: "pointer", fontsize: 14 }}>
                אני רוצה להוריד את הנתונים שלי לקובץ אקסל</Button>
        </>
    )
}
