function calculator(numbers)
{
// if(numbers === "") return 0;
// else if(numbers.length === 1 && typeof(parseInt(numbers))==="number") return(parseInt(numbers));
// else if(numbers.length === 3){
// let number = parseInt(numbers.split(","));
// let secondNumber = parseInt(numbers.split(",")[1]);
// return number + secondNumber;
// }
function numbersYes(numbers)
{   let yes = true;
    let arr = [];
for(let i=0;i<numbers.length;i+=2)
    {  
       arr.push(parseInt(numbers[i]));
       console.log(arr);
    }
    for(x of arr) if(Number.isNaN(x)) yes = false;
    console.log(yes);
   return yes;

}
numbersYes(numbers);
}
calculator("3,,1,4,5,5,6,5,4,4,6,7");
module.exports = calculator