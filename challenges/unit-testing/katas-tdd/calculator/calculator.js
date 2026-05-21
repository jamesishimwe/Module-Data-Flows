function calculator(numbers)
{
if(numbers === "") return 0;
else if(numbers.length === 1 && typeof(parseInt(numbers))===Number) return parseInt(numbers);
}

module.exports = calculator