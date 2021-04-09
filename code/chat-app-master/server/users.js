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
/*
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

*/

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

  var ck=0;
  MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
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
var check;
const login = ({  name,pass }) => {
  name = name.trim().toLowerCase();
 
  var url = "mongodb://localhost:27017/";
 
  console.log("result.length");
  console.log(name);
  console.log(pass);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("appchat");
    var query = { username: name, password: pass };
    dbo.collection("user").find(query).toArray(function (err, result) {
      if (err) throw err;
      if (result != null) {
        console.log(result.length);
        check=result.length;

      }
      console.log(check);
    console.log(check);
    //=1
      db.close();
      if (check==1) return  { error: 'thành công.' };
      else return  { error: 'thất bại.' };
    });
    //uf   ????????????????????????
    console.log(check);
    console.log(check);
  });
  //uf
  console.log(check);
  console.log(check);
  console.log(check);
  console.log(check);
  if (check==1) return  { error: 'thành công.' };
  else return  { error: 'thất bại.' };
}










module.exports = { addUser, removeUser, getUser, getUsersInRoom ,register,login};