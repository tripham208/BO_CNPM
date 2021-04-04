const MongoClient = require('mongodb').MongoClient;

var dbo
  var name ="sss"
  a=function(){
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  /*if (err) throw err;
  var dbo = db.db("appnhac");
  dbo.collection("user").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });*/

  if(err){return console.log(err)}
  var dbo=db.db("appchat");
  dbo.collection("user").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  var myobj = { username: name, password: name,gmail: "ss" };
  dbo.collection("user").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  console.log("thành công")
  
});

}
  a()