function calculator(numbers)
{
 if(numbers === "") return 0;
 else if(numbers.length === 1 && numbersYes(numbers)) return(Number(numbers));
 else if(numbers.length === 3 && numbersYes(numbers)){
 let number = Number(numbers.split(","));
 let secondNumber = Number(numbers.split(",")[1]);
 return number + secondNumber;
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
    console.log(arr);
    for(let i =0; i<arr.length;i++)
    {
        arr[i] = Number(arr[i]);
        console.log(arr[i]);
        if(Number.isNaN(arr[i])) yes = false;
    }
    console.log(arr);
    console.log(yes);
   return yes;

}

module.exports = calculator