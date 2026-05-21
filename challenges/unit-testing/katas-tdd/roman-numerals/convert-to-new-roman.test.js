let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
});
test('Test for empty,null,undefined',()=>{
expect(convertToOldRoman("")).toEqual("");
expect(convertToOldRoman()).toEqual("");
expect(convertToOldRoman("1FVGBHN")).toEqual("");
});