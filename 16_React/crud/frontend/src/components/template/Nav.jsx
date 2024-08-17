import React from "react";
import './Nav.css'
import Item from './NavItems'

const nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Item icon="home" title="Início" link="/"/>
            <Item icon="users" title="Usuários" link="/users"/>
        </nav>
    </aside>

export default nav