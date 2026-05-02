let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function receipt(order)
{
let total = 0;

  console.log("QTY".padEnd(7) + "ITEM".padEnd(20) + "TOTAL".padStart(5));
  for(let obj of order)  {
  let{itemName,quantity,unitPricePence} = obj;
  total = quantity * unitPricePence;
  let row = quantity.toString().padEnd(7) + itemName.padEnd(20) + total.toString().padStart(5);
  console.log(row);
}
console.log("\nTotal: " + total.toString());
}
receipt(order);