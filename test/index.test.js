// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const { checkIfUndefined, isValidAmount, checkIfValidCurrency } = require('../src/validator-function');
const { converterUtility } = require ('../src/converter-utility');

//Negative test case with empty value to check if undefined
describe('checkIfUndefined()', () => {
  test('should return the message: "Invalid Input for amount. Value: "', () => {
    const result = checkIfUndefined("", "amount");
    expect(result).toBe("Invalid Input for amount. Value: ");
  });
});

//Positive valid test case to check if undefined
describe('checkIfUndefined()', () => {
  test('should return the message: "undefined"', () => {
    const result = checkIfUndefined(3, "amount");
    expect(result).toBe(undefined);
  });
});

//Negative test case to check if undefined
describe('checkIfUndefined()', () => {
  test('should return the message: "undefined"', () => {
    const result = checkIfUndefined(-3, "amount");
    expect(result).toBe(undefined);
  });
});

//Negative test case to check if undefined
describe('checkIfUndefined()', () => {
  test('should return the message: "undefined"', () => {
    const result = checkIfUndefined("SH", "amount");
    expect(result).toBe(undefined);
  });
});

//InValid Amount value undefined test case
describe('checkIfUndefined()', () => {
  test('should return the message: "Invalid Input for amount. Value: undefined"', () => {
    const result = checkIfUndefined(undefined, "amount");
    expect(result).toBe("Invalid Input for amount. Value: undefined");
  });
});

//InValid Amount value - negative test case
describe('isValidAmount()', () => {
  test('should return the message: "Invalid Input, The amount given is less than Zero. Value: -3"', () => {
    const result = isValidAmount(-3);
    expect(result).toBe("Invalid Input, The amount given is less than Zero. Value: -3");
  });
});

//Valid Amount value - zero test case
describe('isValidAmount()', () => {
  test('should return the message: "undefined"', () => {
    const result = isValidAmount(0);
    expect(result).toBe(undefined);
  });
});

//Valid Amount value test case
describe('isValidAmount()', () => {
  test('should return the message: "undefined"', () => {
    const result = isValidAmount(10);
    expect(result).toBe(undefined);
  });
});

//Valid Supported Currency value test case
describe('checkIfValidCurrency()', () => {
  test('should return the message: "undefined"', () => {
    const result = checkIfValidCurrency("CAD", "Base Currency");
    expect(result).toBe(undefined);
  });
});

//Unsupported Currency value test case
describe('checkIfValidCurrency()', () => {
  test('should return the message: "The Base Currency is not a valid Global Currency. Value: CD. The supported currencies are: CAD,USD,GBP,EUR"', () => {
    const result = checkIfValidCurrency("CD", "Base Currency");
    expect(result).toBe("The Base Currency is not a valid Global Currency. Value: CD. The supported currencies are: CAD,USD,GBP,EUR");
  });
});

//Currency conversion value test case CAD to USD
describe('converterUtility()', () => {
  test('should return the message: "0.78125"', () => {
    const result = converterUtility(1, "CAD", "USD");
    expect(result).toBe(0.78125);
  });
});

//Currency conversion value test case USD to CAD
describe('converterUtility()', () => {
  test('should return the message: "1.28"', () => {
    const result = converterUtility(1, "USD", "CAD");
    expect(result).toBe(1.28);
  });
});

//Currency conversion value test case GBP to CAD
describe('converterUtility()', () => {
  test('should return the message: "11.52"', () => {
    const result = converterUtility(9, "USD", "CAD");
    expect(result).toBe(11.52);
  });
});

//Currency conversion value test case EUR to USD
describe('converterUtility()', () => {
  test('should return the message: "23.04"', () => {
    const result = converterUtility(18, "USD", "CAD");
    expect(result).toBe(23.04);
  });
});