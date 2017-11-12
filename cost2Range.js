function sendCost(price,e,textarea)
{
  var code = (e.keyCode ? e.keyCode : e.which);
if(code == 13) { //Enter keycode

var priceRange =-1;
  if(price<=15) //use low Collection
    priceRange = 0;
 if(15<price && price <30) //use med Collection
    priceRange= 1;
if(price >= 30)    //use high Collection
    priceRange =2;

// console.log(priceRange);
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://155.246.210.31:8080/"+priceRange, true);
// console.log(xhr.status);
//
// xhr.send();
//
// console.log(xhr.responseText);


if(priceRange == 0)
displayValues("Johnny Rockets","134 Washington St", "24 Hours" );

if(priceRange == 1)
displayValues("Bareburger", "515 Washington St", "11:30 AM - 10:30 PM");

if(priceRange == 2)
displayValues("Arthur's Tavern", "237 Washington St", "11:30 AM - 10 PM");
                  }

}
