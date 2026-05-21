function calculator(numbers)
{
if(numbers === "") return 0;
else if(numbers.length === 1 && typeof(parseInt(numbers))==="number") return(parseInt(numbers));
else if(numbers.length === 3){
let number = parseInt(numbers.split(","));
let secondNumber = parseInt(numbers.split(",")[1]);
return number + secondNumber;
}
}

module.exports = calculator