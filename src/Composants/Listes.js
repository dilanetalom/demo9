import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

function Listes(){

    return([
        <nav className="menu">
            <ul className="">
            <li>
            <a href="">Identication</a>
                <ul>
                <li><a href="">Connexion</a></li>
                <li><a href="">Inscription</a></li>
                </ul>
                </li>
            </ul>
            <ul className="">
            <li>
            <a href="">A propos</a>
                <ul>
                <li><a href="">Connexion</a></li>
                <li><a href="">Inscription</a></li>
                </ul>
                </li>
            </ul>
        </nav>
    ]);
}
export default Listes;