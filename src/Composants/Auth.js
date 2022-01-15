import React from 'react';
import ReactDome from 'react-dom';
import './App.css';
function Auth(){
    return([
        
        <div className="con">
               <label>Email</label>
               <input type="email"></input>
               <label>Password</label>
               <input type="password"></input>
               <a href=""> <button>Connexion</button></a>
        </div>
    ]);
}
export default Auth;