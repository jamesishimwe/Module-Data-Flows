function sales(carsSold) {
    let totals = {Ford:0,'Land Rover':0,Toyota:0,Honda:0};
for(let car of carsSold)
{
    if(car.make === 'Ford') totals.Ford += car.price;
    else if(car.make === 'Land Rover') totals["Land Rover"] += car.price;
    else if(car.make === 'Toyota') totals.Toyota += car.price;
    else if(car.make === 'Honda') totals.Honda += car.price;
}
return totals;
}
 let carsSold = [
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
  ];
sales(carsSold);
module.exports = sales;
