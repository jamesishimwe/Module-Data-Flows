let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
 expect(convertToOldRoman("1")).toEqual("I");
});

test("returns V if passed 1 as an argument", function () {
 expect(convertToOldRoman("5")).toEqual("V");
});

test("returns X if passed 1 as an argument", function () {
 expect(convertToOldRoman("10")).toEqual("X");
});

test("returns L if passed 1 as an argument", function () {
 expect(convertToOldRoman("50")).toEqual("L");
});
test("returns C if passed 1 as an argument", function () {
 expect(convertToOldRoman("100")).toEqual("C");
});

test("returns D if passed 1 as an argument", function () {
 expect(convertToOldRoman("500")).toEqual("D");
});

test("returns M if passed 1 as an argument", function () {
 expect(convertToOldRoman("1000")).toEqual("M");
});
