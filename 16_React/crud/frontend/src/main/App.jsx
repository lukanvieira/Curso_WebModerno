import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from "react-router-dom";

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Route from './Routes'

const app = props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Route />
            <Footer />
        </div>
    </BrowserRouter>

export default app