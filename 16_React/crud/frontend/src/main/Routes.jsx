import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";

const route = props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
);

export default route