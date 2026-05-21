function calculator(numbers)
{
 if(numbers === "") return 0;
 else if(negativeIn(numbers)) throw new Error("negatives not allowed: " + numbers.split(",").filter(x => Number(x) < 0).join(","));
 else if(numbers.length === 1 && numbersYes(numbers)) return Number(numbers);
 else if(numbers.split(",").length === 2 && numbersYes(numbers)){
  let number = numbers.split(",")[0];
  let secondNumber = numbers.split(",")[1];
  return (Number(number) + Number(secondNumber));
}
 else if(numbers.split(",").length>=3 && numbersYes(numbers)){
    let arr = numbers.split(",");
    let total = 0;
    for(let i=0;i<arr.length;i++)
    {   let number = Number(arr[i]);  
        if(number >1000) continue;
        total += number;
    }
    return total;
    
}
else{
    throw new Error("Invalid input");
}
}
function numbersYes(numbers)
{   let yes = true;
    let arr = numbers.split(",");
   
    for(let i =0; i<arr.length;i++)
    {
        arr[i] = Number(arr[i]);
        
        if(Number.isNaN(arr[i])) yes = false;
    }
   return yes;
 
}
function negativeIn(numbers)
{
    let yes = false;
    let arr = numbers.split(",");
    for(let x of arr) if(Number(x) < 0) yes = true;
    return yes;
}
module.exports = calculator