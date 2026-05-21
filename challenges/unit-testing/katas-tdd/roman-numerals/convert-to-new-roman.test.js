let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
expect(convertToNewRoman("1")).toEqual("I");
});
test('Test for empty,null,undefined',()=>{
expect(convertToNewRoman('')).toEqual("");
expect(convertToNewRoman()).toEqual("");
expect(convertToNewRoman("1FVGBHN")).toEqual("");
});

test("returns V if passed 1 as an argument", function () {
 expect(convertToNewRoman("5")).toEqual("V");
});

test("returns X if passed 1 as an argument", function () {
 expect(convertToNewRoman("10")).toEqual("X");
});

test("returns L if passed 1 as an argument", function () {
 expect(convertToNewRoman("50")).toEqual("L");
});
test("returns C if passed 1 as an argument", function () {
 expect(convertToNewRoman("100")).toEqual("C");
});

test("returns D if passed 1 as an argument", function () {
 expect(convertToNewRoman("500")).toEqual("D");
});

test("returns M if passed 1 as an argument", function () {
 expect(convertToNewRoman("1000")).toEqual("M");
});

test('Test for the rest',()=>{
  expect(convertToNewRoman("4")).toEqual("IV");
  expect(convertToNewRoman("14")).toEqual("XIV");
  expect(convertToNewRoman("44")).toEqual("XLIV");
  expect(convertToNewRoman("99")).toEqual("XCIX");
  expect(convertToNewRoman("900")).toEqual("CM");
  expect(convertToNewRoman("944")).toEqual("CMXLIV");
});