const users = [];
const MongoClient = require('mongodb').MongoClient;

a=function(name){
  MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
 
    if(err){return console.log(err)}
    var dbo=db.db("appchat");
    dbo.collection("user").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
    var myobj = { username: name, password: name,gmail: name };
    dbo.collection("user").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    console.log("thành công")
    
  });
  
  }






const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is taken.' };



  a(name)



  const user = { id, name, room };
  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };