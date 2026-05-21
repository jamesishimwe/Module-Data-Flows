const calculator = require('./calculator');
test("Returns zero for empty string",()=>{
    expect(calculator("")).toEqual(0);

});
test("Returns a number if passed without another",()=>{
    expect("5").toEqual(5);
})