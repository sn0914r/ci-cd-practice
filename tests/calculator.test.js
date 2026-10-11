const calculator = require("../src/calculator");

describe("calculator", () => {
  describe("valid operations", () => {
    it("should perform addition correctly", () => {
      expect(calculator(5, 11, "+")).toBe(16);
      expect(calculator(-5, 11, "+")).toBe(6);
      expect(calculator(0, 0, "+")).toBe(0);
    });

    it("should perform subtraction correctly", () => {
      expect(calculator(15, 5, "-")).toBe(10);
      expect(calculator(5, 15, "-")).toBe(-10);
      expect(calculator(0, 7, "-")).toBe(-7);
    });

    it("should perform multiplication correctly", () => {
      expect(calculator(4, 5, "*")).toBe(20);
      expect(calculator(-3, 6, "*")).toBe(-18);
      expect(calculator(0, 100, "*")).toBe(0);
    });

    it("should perform division correctly", () => {
      expect(calculator(20, 4, "/")).toBe(5);
      expect(calculator(7, 2, "/")).toBe(3.5);
      expect(calculator(-10, 2, "/")).toBe(-5);
    });

    it("should handle floating point numbers", () => {
      expect(calculator(2.5, 1.5, "+")).toBe(4);
      expect(calculator(5.5, 0.5, "-")).toBe(5);
    });
  });

  describe("invalid inputs and edge cases", () => {
    it("should return false when num1 is not a number", () => {
      expect(calculator("5", 10, "+")).toBe(false);
      expect(calculator(null, 10, "+")).toBe(false);
      expect(calculator(undefined, 10, "+")).toBe(false);
      expect(calculator({}, 10, "+")).toBe(false);
    });

    it("should return false when num2 is not a number", () => {
      expect(calculator(5, "10", "+")).toBe(false);
      expect(calculator(5, null, "+")).toBe(false);
      expect(calculator(5, undefined, "+")).toBe(false);
      expect(calculator(5, [], "+")).toBe(false);
    });

    it("should return false for unsupported operations", () => {
      expect(calculator(5, 10, "%")).toBe(false);
      expect(calculator(5, 10, "^")).toBe(false);
      expect(calculator(5, 10, "add")).toBe(false);
      expect(calculator(5, 10, "")).toBe(false);
    });

    it("should return false when arguments are missing", () => {
      expect(calculator()).toBe(false);
      expect(calculator(5)).toBe(false);
      expect(calculator(5, 10)).toBe(false);
    });
  });
});
