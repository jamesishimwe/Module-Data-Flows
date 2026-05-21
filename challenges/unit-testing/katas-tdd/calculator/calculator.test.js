const calculator = require('./calculator');
test("Returns zero for empty string",()=>{
    expect(calculator("")).toEqual(0);

});