import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import { Link } from "react-router-dom";

import './Join.css';





let socket;
export const Edit = ({ location }) => {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState('');
  const ENDPOINT = 'http://localhost:5000/';

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name)
    alert("name:"+name)
  }, [ENDPOINT, location.search]);

  const editpass = function (event) {

      socket = io(ENDPOINT);

      socket.emit('editpass', { name, pass }, (error) => {
        if (error) {
          alert(error);
        }
        else alert("thành công")
      });
    
  }
  const editgmail = function (event) {


    alert("gmail:"+gmail)
    socket = io(ENDPOINT);


    socket.emit('editgmail', { name, gmail }, (error) => {
      if (error) {
        alert(error);
      }
      else alert("thành công")
    });
  
}
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Thay đổi thông tin cá nhân</h1>
        <form >
        <h4  className="heading">thay mật khẩu</h4>
          <div>
            <input placeholder="password" className="joinInput mt-20" type="text" onChange={(event) => setPass(event.target.value)} />
          </div>
          

          <button className={'button mt-20'} onClick={editpass}>Save</button>
          <h4  className="heading">thay gmail</h4>
<div>
            <input placeholder="email" className="joinInput mt-20" type="text" onChange={(event) => setGmail(event.target.value)} />
          </div>
          <button className={'button mt-20'} onClick={editgmail}>Save</button>
        </form>
      </div>
    </div>
  );
}