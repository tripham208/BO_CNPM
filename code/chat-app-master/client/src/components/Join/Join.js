import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Link } from "react-router-dom";

import './Join.css';
let socket;
export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [pass, setPass] = useState('');
  const ENDPOINT = 'http://localhost:5000/';
  const check = function (event) {


    alert('Giá trị đã được submit: ' + name);
    socket = io(ENDPOINT);


    socket.emit('login', { name, pass }, (error) => {
      
      if (error) {
        alert(error);
        return null;
      }
      return  event.preventDefault();
    });

    //to={`/chat?name=${name}&room=${room}`}
  }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="password" className="joinInput mt-20" type="text" onChange={(event) => setPass(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={check} >
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
        <Link to={`/register`}>
          <button className={'button mt-20'} type="submit">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}