const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom,register } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


const MongoClient = require('mongodb').MongoClient;


app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);




    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, chao ban ${user.room}.`});
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

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  });






  socket.on('register', ({ name, pass,gmail }, callback) => {
    const { error, user } = register({ name,pass, gmail });

    if(error) return callback(error);



    callback();
  });









});

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server has started.`)

});

