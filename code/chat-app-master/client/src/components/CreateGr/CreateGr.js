import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import { Link } from "react-router-dom";

import './Join.css';

let socket;
export const CreateGr = ({ location }) => {
  const [name, setName] = useState('');
  const [namegr, setNamegr] = useState('');
  const ENDPOINT = 'http://localhost:5000/';


  useEffect(() => {
    const { name } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name)
    alert("name:"+name)
  }, [ENDPOINT, location.search]);




  const sub = function (event) {



    socket = io(ENDPOINT);

    
          socket.emit('newgr', { name, namegr }, (error) => {
            if(error) {
              alert(error);
            }
          });
        
    alert('Giá trị đã được submit: ' + name);
  }








  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Tạo group</h1>
        <form >
          <div>
            <input placeholder="tên group" className="joinInput" type="text" onChange={(event) => setNamegr(event.target.value)} />
          </div>


          <button className={'button mt-20'} onClick={sub}>Tạo</button>
          </form>
      </div>
    </div>
  );
}
