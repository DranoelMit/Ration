var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/resdb";

MongoClient.connect(url, function(err, db) {
if(err) throw err;
console.log("Database created!");
});
