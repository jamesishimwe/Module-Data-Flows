const calculator = require('./calculator');
test("Returns zero for empty string",()=>{
    expect(calculator("")).toEqual(0);

});
test("Returns a number if passed without another",()=>{
    expect(calculator("5")).toEqual(5);
})

test('Returns sum of two numbers',()=>{
    expect(calculator('3,6')).toEqual(9);
});
 test('Returns sum of many numbers',()=>{
     expect(calculator('3,6,1,4,4,5,5,6,5,4,4,6,7')).toEqual(60);
 });
