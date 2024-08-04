import React from "react";
import './Main.css'
import Header from './Header'

const main = props =>
    <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>

export default main