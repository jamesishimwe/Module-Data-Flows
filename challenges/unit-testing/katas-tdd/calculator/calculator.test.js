const calculator = require('./calculator');
test("Returns zero for empty string",()=>{
    expect(calculator("")).toEqual(0);

});
test("Returns a number if passed without another",()=>{
    expect(calculator("5")).toEqual(5);
});

test('Returns sum of two numbers',()=>{
    expect(calculator('3,6')).toEqual(9);
});
 test('Returns sum of many numbers',()=>{
     expect(calculator('3,6,1,4,4,5,5,6,5,4,4,6,7')).toEqual(60);
 });

test('Ignore big numbers',()=>{
expect(calculator('2,4,1,2,4,5,6,1001')).toEqual(24);
});

test('Throw an error for negative numbers',()=>{
    expect(()=>{calculator('1,2,4,5,-8,-10')}).toThrow("negatives not allowed: -8,-10");
});