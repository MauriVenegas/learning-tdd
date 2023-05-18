import { describe, test, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  // Este test es redundate porque en los siguinetes test comprueba que sea una función
  // test("should be a function", () => {
  //   expect(typeof fizzbuzz).toBe("function");
  // })

  test("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  test("should throw a spesific error message if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow(/number/);
  });

  test("should throw a spesific error message if not number is provided", () => {
    expect(() => fizzbuzz(NaN)).toThrow("Parameter provider must be a number");
  });

  test("should return 1 if number provider is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  test("should return 1 if number provider is 1", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  test("should return 'fizz' if number provider is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  test("should return 'fizz' if number provider is multiple of 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });

  test("should return 'buzz' if number provider is multiple of 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });

  test("should return 'fizzbuzz' if number provider is multiple of 3 and  5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
