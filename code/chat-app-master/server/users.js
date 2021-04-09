const users = [];
const MongoClient = require('mongodb').MongoClient;




const addUser = ({ id, name, room }) => {
  //name = name.trim().toLowerCase();
  //room = room.trim().toLowerCase();
  console.log("name:"+name)
  console.log("room:"+room)
  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (!name || !room) return { error: 'Tên người dùng và phòng là bắt buộc.' };
  if (existingUser) return { error: 'Username is taken.' };

  /*var u=new User();
  u.a()*/

  // a(name)
  MongoClient.connect("mongodb://localhost:27017/", function (err, db) {

    console.log("add")
    if (err) { return console.log(err) }
    var dbo = db.db("appchat");


    var myobj = { username: name, password: name, gmail: name };
    dbo.collection("user").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    console.log("thành công")

  });



  const user = { id, name, room };
  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);




const register = ({  name,pass, gmail }) => {
  name = name.trim().toLowerCase();
  // = gmail.trim().toLowerCase();

 // const existingUser = users.find((user) => user.room === room && user.name === name);

  //if (!name || !room) return { error: 'Username and room are required.' };
  //if (existingUser) return { error: 'Username is taken.' };

  /*var u=new User();
  u.a()*/
  console.log("name:"+name)
  console.log("pass:"+pass)
  console.log("gmail:"+gmail)
  // a(name)
  var ck=0;
  MongoClient.connect("mongodb://localhost:27017/", function (err, db) {

    console.log("hàm")
    if (err) { return console.log(err) }
    var dbo = db.db("appchat");


    var myobj = { username: name, password: pass, gmail: gmail };
    dbo.collection("user").insertOne(myobj, function (err, res) {
      if (err) throw err;
      ck=1;
      console.log("1 document inserted");
      db.close();
    });
    
    console.log("thành công")

  });

  if (ck==1) return  { error: 'thất bại.' };
  else return  { error: 'thành công.' };
}











module.exports = { addUser, removeUser, getUser, getUsersInRoom ,register};