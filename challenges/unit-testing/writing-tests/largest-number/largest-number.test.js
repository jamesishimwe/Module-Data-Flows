let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
 let expected = 88;

  expect(getLargestNumber(input)).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
