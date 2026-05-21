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