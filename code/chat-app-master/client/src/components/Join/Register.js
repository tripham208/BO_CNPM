import React, { useState } from 'react';
import './Join.css';
import Join from './Join'

import {BrowserRouter as Router,Route, Link } from "react-router-dom";
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class Register extends React.Component{

  render() {
    return (

      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Register</h1>
          <div>
            <input placeholder="Name" className="joinInput" type="text"  />
          </div>
          <div>
            <input placeholder="password" className="joinInput" type="text" />
          </div>
          <div>
            <input placeholder="gmail" className="joinInput mt-20" type="text"  />
          </div>
          
          
          <button className={'button mt-20'}  >Sign Up</button>

          <button className={'button mt-20'}  >Sign In</button>
 
        </div>
        
      </div>
    );
  }
}
export default Register