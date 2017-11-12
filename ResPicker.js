var mongo = require('mongodb');
var assert = require('assert');

var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/placesdb';

var lowIdLength = 26;
var medIdLength = 19;
var highIdLength = 8;

// MongoClient.connect(url, (err, db) => {
//   assert.equal(null, err);
//
//
// var collection = db.collection('lowRestrs');
// collection.find({}).toArray().then((docs) => {
//
//       docs.forEach((item, idx, array) => { console.log(item) });
//
//     });
//
// });
function pickRestaurant(priceRange)
{
  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);

  //db.restrs.insert({name: "Black Bear Bar and Grill",
    //location: "205 Washington St", hours:"11am-11pm"});
    var collection;
    var id =-1;
  if(priceRange==0){
      collection = db.collection('lowRestrs');
      id = Math.floor(lowIdLength*Math.random()) + 14;
    }
  else if(priceRange==1){
      collection = db.collection('medRestrs');
      id = Math.floor(medIdLength*Math.random())+39;
    }
  else if(priceRange==2){
      collection = db.collection('highRestrs');
      id = Math.floor(highIdLength*Math.random());
    }

console.log(id);
  collection.findOne(({"_id" : id}), (err, doc) =>
{
  if (err) {
         console.log(err);
     } else {

         console.log(doc);
         let ans = [doc.name, doc.location, doc.hours];
         displayValues(ans);
         console.log(ans);
     }

     db.close();
});

});
}

//pickRestaurant(0);
