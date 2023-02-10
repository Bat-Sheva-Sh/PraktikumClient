import React from "react";
import {Route, Routes, Link} from 'react-router-dom';
import Direction from "./Direction";
import Details from "./Details";
import GoodBye from "./GoodBye";

export default function Home() {

    return (
        <div>
            <div><Link to='/Details' action="result">למילוי הטופס</Link></div>
            <div><Link to='/Direction' action="result">להנחיות להשלמת הטופס</Link></div>

            <Routes>
                <Route>
                    <Route path="/Details" element={<Details />} />
                    <Route path="/Direction" element={<Direction />} />
                    <Route path="/GoodBye" element={<GoodBye />} />
                </Route>
            </Routes>
        </div>
    )
}