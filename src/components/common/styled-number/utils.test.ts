import { render } from "@testing-library/react";
import { renderSign, getColor } from "./utils";

describe("renderSign", () => {
  test("it should show a sign for positive values", () => {
    const showSign = true;
    const testValue = 1000;
    const expectedValue = "+";
    const result = renderSign(testValue, showSign);
    expect(result).toEqual(expectedValue);
  });
  test("it should not show a sign for negative values", () => {
    const showSign = true;
    const testValue = -500;
    const result = renderSign(testValue, showSign);
    expect(result).toBeUndefined();
  });
  test("it should not show a sign when showSign is false", () => {
    const showSign = false;
    const testValue = 1000;
    const result = renderSign(testValue, showSign);
    expect(result).toBeUndefined();
  });
  test("it should not show a sign when showSign is undefined", () => {
    const showSign = undefined;
    const testValue = 1000;
    const result = renderSign(testValue, showSign);
    expect(result).toBeUndefined();
  });
  test("it should not show a sign where value is negative and showSign is undefined", () => {
    const showSign = undefined;
    const testValue = -500;
    const expectedValue = undefined;
    const result = renderSign(testValue, showSign);
    expect(result).toBeUndefined();
  });
  test("it should not show a sign where value is negative and showSign is false", () => {
    const showSign = false;
    const testValue = -500;
    const expectedValue = undefined;
    const result = renderSign(testValue, showSign);
    expect(result).toBeUndefined();
  });
});

// TODO: Add tests for function getColor()
