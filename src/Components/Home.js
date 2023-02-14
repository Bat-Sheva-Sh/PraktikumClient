import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Direction from "./Direction";
import Details from "./Details";
import GoodBye from "./GoodBye";
import ExportToExcel from './ExportToExcel'
import { useContext } from "react";
import { userContext } from './UserContext';

export default function Home() {

    const userCtx = useContext(userContext);
    return (
        <div>
            <h1>שלום {userCtx.userNameState} {userCtx.familyNameState}</h1>
            <div className="container-fluid">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"><Link to='/Details' className="nav-link" data-toggle="tab" >למילוי הטופס</Link></li>
                    <li className="nav-item"><Link to='/Direction' className="nav-link" data-toggle="tab" >להנחיות להשלמת הטופס</Link></li>
                </ul>
            </div>

            <Routes>
                <Route>
                    <Route path="/Details" element={<Details />} />
                    <Route path="/Direction" element={<Direction />} />
                    <Route path="/GoodBye" element={<GoodBye />} />
                    <Route path="/ExportToExcel" element={<ExportToExcel />} />
                </Route>
            </Routes>
        </div>
    )
}