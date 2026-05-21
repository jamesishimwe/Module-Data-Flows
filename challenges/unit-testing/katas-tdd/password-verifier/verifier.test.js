const verifier = require("./verifier");

test('Password is 8 characters or more',()=>{
    expect(verifier("Mypassword1234")).toEqual("Password accepted");
    expect(verifier("1234")).toEqual("Password rejected");
});
test('Password is not null/is null',()=>{
    expect(verifier("Password12345678")).toEqual("Password accepted");
    expect(verifier()).toEqual("Password rejected");
})
test('Upper case letter',()=>{
    expect(verifier("12345678")).toEqual("Password rejected");
    expect(verifier("12345Y78")).toEqual("Password accepted");
})

test('Password has a number',()=>{
    expect(verifier("ABCDEFGHIJ1")).toEqual("Password accepted");
    expect(verifier("ABCDEFGHIJ")).toEqual("Password rejected");
});