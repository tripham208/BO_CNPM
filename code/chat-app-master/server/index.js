const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom, register,login } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

var nodemailer = require('nodemailer');
const MongoClient = require('mongodb').MongoClient;
const { error } = require('console');


app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);




    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, chao ban ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} da tham gia!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });






  socket.on('register', ({ name, pass, gmail }, callback) => {
    const { error } = register({ name, pass, gmail });

    if (error) return callback(error);



    callback();
  });

  socket.on('checkgmail', ({ gmail }, callback) => {




    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tripham059@gmail.com',
        pass: 'tripham208'
      }
    });

    var mailOptions = {
      from: 'tripham059@gmail.com',
      to: gmail,
      subject: 'code',
      text: '1234'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    callback();
  });

  socket.on('editpass', ({ name, pass }, callback) => {

   // const { error } = login({name, pass });
   var url = "mongodb://127.0.0.1:27017/";

   MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("appchat");
     var myquery = { username: name };
     var newvalues = { $set: { password: pass } };
     dbo.collection("user").updateOne(myquery, newvalues, function(err, res) {
       if (err) throw err;
       console.log("1 document updated");
       db.close();
     });
   });
    if (error) return callback(error);
    callback();
  });
  socket.on('editgmail', ({ name, gmail }, callback) => {

    // const { error } = login({name, pass });
    var url = "mongodb://127.0.0.1:27017/";
 
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("appchat");
      var myquery = { username: name };
      var newvalues = { $set: { gmail: gmail } };
      dbo.collection("user").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
     if (error) return callback(error);
     callback();
   });






});

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server has started.`)

});

