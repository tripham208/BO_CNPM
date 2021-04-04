import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

//const Mongo = require('mongodb').MongoClient;


  var name = ''
  var password = ''
  var gmail = ''
export const Register = () => {

  const handleSubmit = function (event) {
    let dbo/*
    MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
      if(err){return console.log(err)}
      var dbo=db.db("appchat");
      dbo.collection("user").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });*/
      console.log("thành công")
      /*var myobj = { username: name, password: name,gmail: name };
      dbo.collection("user").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });*/


    alert('Giá trị đã được submit: ' + name);
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder="Name" className="joinInput" type="text" onChange={(event) => { name = event.target.value }} />
          </div>
          <div>
            <input placeholder="password" className="joinInput mt-20" type="text" />
          </div>
          <div>
            <input placeholder="email" className="joinInput mt-20" type="text" />
          </div>
          <button className={'button mt-20'} type="submit">Sign Up</button>
          <Link to={`/`}>
            <button className={'button mt-20'} >Sign In</button>
          </Link></form>
      </div>
    </div>
  );
}