var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("appchat");
  var query = { username:"trii",password:"pass" };
  dbo.collection("user").find(query).toArray(function(err, result) {
    if (err) throw err;
    if(result !=null) {
      console.log(result.length);
    }
    else console.log("ko co");
   // console.log(result);
    db.close();
  });
});