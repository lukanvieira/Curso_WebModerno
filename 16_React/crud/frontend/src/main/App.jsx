import React from "react";
import './App.css';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const app = props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>

export default app