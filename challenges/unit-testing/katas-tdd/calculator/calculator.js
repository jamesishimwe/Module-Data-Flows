function calculator(numbers)
{
 if(numbers === "") return 0;
 else if(numbers.length === 1 && numbersYes(numbers)) return(parseInt(numbers));
 else if(numbers.length === 3 && numbersYes(numbers)){
 let number = parseInt(numbers.split(","));
 let secondNumber = parseInt(numbers.split(",")[1]);
 return number + secondNumber;
 }
 else if(numbers.length>3 && numbersYes(numbers)){
    let arr = numbers.split(",");
    let total = 0;
    for(let i=0;i<numbers.length;i+=2)
    {
        total += parseInt(numbers[i]);
    }
    return total;
 }
 
function numbersYes(numbers)
{   let yes = true;
    let arr = [];
for(let i=0;i<numbers.length;i+=2)
    {  
       arr.push(parseInt(numbers[i]));
    }
    for(x of arr) if(Number.isNaN(x)) yes = false;
   return yes;

}
}

module.exports = calculator