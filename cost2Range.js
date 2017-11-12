function sendCost(price)
{

  if(price<=15) //use low Collection
    pickRestaurant(0);
  else if(15<price && price <30) //use med Collection
    pickRestaurant(1);
  else     //use high Collection
    pickRestaurant(2)


}
