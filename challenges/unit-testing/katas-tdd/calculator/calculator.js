function calculator(numbers)
{
 if(numbers === "") return 0;
 else if(numbers.length === 1 && numbersYes(numbers)) return(Number(numbers));
 else if(numbers.length === 3 && numbersYes(numbers)){
  let number = numbers.split(",")[0];
  let secondNumber = numbers.split(",")[1];
  return (Number(number) + Number(secondNumber));
}
 else if(numbers.length>3 && numbersYes(numbers)){
    let arr = numbers.split(",");
    let total = 0;
    for(let i=0;i<arr.length;i++)
    {   let number = Number(arr[i]);  
        if(number >1000) continue;
        total += number;
    }
    return total;
    
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

module.exports = calculator