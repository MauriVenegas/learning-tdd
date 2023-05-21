import { describe, expect, test } from "vitest";
import { canReconfigure } from "../src/can-reconfigure";

describe("canReconfigure", () => {
  // test('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf("function");
  // })

  test("should throw if first parameteris missing", () => {
    expect(() => canReconfigure()).toThrow();
  });

  test("should throw if first parameteris is not a string", () => {
    expect(() => canReconfigure(2)).toThrow();
  });

  test("should throw if second parameteris is not a string", () => {
    expect(() => canReconfigure("a", 3)).toThrow();
  });

  test("should return a bolean", () => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean");
  });

  test("should return false if string provided have diferent length even with same unique letters", () => {
    expect(canReconfigure("aab", "ab")).toBe(false);
  });

  test("should return false if string provided have diferent number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });

  test("should returns false if have different order of transformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });

  test("should returns true if have same length, number of unique letters and order of transformation", () => {
    expect(canReconfigure('BAL', 'LIB')).toBe(true);
  });
});
