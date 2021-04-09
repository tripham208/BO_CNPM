import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import { Link } from "react-router-dom";

import './Join.css';










let socket;
export const Register = ({ location }) => {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState('');
  const ENDPOINT = 'http://localhost:5000/';

/*
  useEffect(() => {

    socket = io(ENDPOINT);

    setName(name);
    alert (name +"here")
    socket.emit('join', { name, name }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);



*/




/*
  useEffect(() => {
    const { name, pass,gmail } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setGmail(gmail);
    setName(name)
    setPass(pass);

    socket.emit('register', { name, pass,gmail }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);*/


  const sub = function (event) {
    
 
  if(check !=1234) {
    alert ("mã sai")
  }
  else{
      socket = io(ENDPOINT);
  

      socket.emit('register', { name, pass,gmail }, (error) => {
        if(error) {
          alert(error);
        }
      });
    }
    alert('Giá trị đã được submit: ' + name);
  }
  const sendcheck = function (event) {
    
 
  
    socket = io(ENDPOINT);


    socket.emit('checkgmail', {gmail }, (error) => {
      if(error) {
        alert(error);
      }
    });
  
  alert('gmail gửi đến' + name);
  check=1234;
}

  





  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <form >
          <div>
            <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="password" className="joinInput mt-20" type="text" onChange={(event) => setPass(event.target.value)}/>
          </div>
          <div>
            <input placeholder="email" className="joinInput mt-20" type="text" onChange={(event) => setGmail(event.target.value)}/>
          </div>
          <button className={'button mt-20'} onClick={sendcheck}>nhận mã</button>
          <div>
            <input placeholder="mã xác nhận" className="joinInput mt-20" type="text" onChange={(event) => setCheck(event.target.value)}/>
          </div>
          <button className={'button mt-20'} onClick={sub}>Sign Up</button>
          <Link to={`/`}>
            <button className={'button mt-20'} >Sign In</button>
          </Link></form>
      </div>
    </div>
  );
}