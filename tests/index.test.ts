import { sum } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("Sum function", () => {
  test("Returns correct value", () => {
    expect(sum(4, 5)).toEqual(9);
  });
});
