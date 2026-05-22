// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let average = 0;
    numbers = numbers.filter( (num) =>typeof num==="number");
    console.log(numbers);
    for(let num of numbers) average+=num;
    return average/numbers.length;
}

module.exports = average;
