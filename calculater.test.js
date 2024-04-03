const calc = require("./calculator.js");

describe("Calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });
});

describe("Calculator - Additional tests", () => {
  // Test case: Zero addition
  it("should return the other number when adding zero", () => {
    expect(calc(0, "+", 7)).toBe(7);
    expect(calc(9, "+", 0)).toBe(9);
  });

  // Test case: Zero multiplication
  it("should return zero when multiplying by zero", () => {
    expect(calc(0, "*", 5)).toBe(0);
    expect(calc(12, "*", 0)).toBe(0);
  });

  // Test case: Identity property of multiplication
  it("should return the same number when multiplying by one", () => {
    expect(calc(1, "*", 8)).toBe(8);
    expect(calc(15, "*", 1)).toBe(15);
  });

  // Test case: Negative numbers multiplication
  it("should handle multiplication of negative numbers correctly", () => {
    expect(calc(-3, "*", -7)).toBe(21);
    expect(calc(-5, "*", 4)).toBe(-20);
  });

  // Test case: Division by negative number
  it("should handle division by a negative number correctly", () => {
    expect(calc(20, "/", -5)).toBe(-4);
    expect(calc(-30, "/", 6)).toBe(-5);
  });

  // Test case: Zero subtraction
  it("should return the same number when subtracting zero", () => {
    expect(calc(7, "-", 0)).toBe(7);
  });

  // Test case: Subtracting a number from itself
  it("should return zero when subtracting a number from itself", () => {
    expect(calc(9, "-", 9)).toBe(0);
  });

  // Test case: Exponentiation
  it("should handle exponentiation correctly", () => {
    expect(calc(2, "^", 3)).toBe(8);
    expect(calc(5, "^", 0)).toBe(1);
    expect(calc(3, "^", -2)).toBeCloseTo(0.111, 3);
  });

  // Test case: Modulo
  it("should handle modulo operation correctly", () => {
    expect(calc(10, "%", 3)).toBe(1);
    expect(calc(20, "%", 5)).toBe(0);
    expect(calc(15, "%", 4)).toBe(3);
  });

  //Test case :Numbers bigger than 1000 should be ignored
  it("should ignore Numbers bigger than 1000", () => {
    expect(calc(1001, "+", 3)).toBe(3);
    expect(calc(20, "-", 5000)).toBe(20);
    expect(calc(15, "^", 1500)).toBe(1);
  });
});
