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

describe("getColor", () => {
  test("it should show green where value is positive", () => {
    const showSign = true;
    const testValue = 1000;
    const expectedValue = "green";
    const result = getColor(testValue, showSign);
    expect(result).toEqual(expectedValue);
  });
  test("it should show red where value is negative", () => {
    const showSign = true;
    const testValue = -500;
    const expectedValue = "red";
    const result = getColor(testValue, showSign);
    expect(result).toEqual(expectedValue);
  });
  test("it should show grey where value is 0", () => {
    const showSign = true;
    const testValue = 0;
    const expectedValue = "grey";
    const result = getColor(testValue, showSign);
    expect(result).toEqual(expectedValue);
  });
  test("it should show undefined when showSign is false", () => {
    const showSign = false;
    const testValue = 1000;
    const expectedValue = undefined;
    const result = getColor(testValue, showSign);
    expect(result).toBeUndefined;
  });
  test("it should show undefined when showSign is undefined", () => {
    const showSign = undefined;
    const testValue = 1000;
    const expectedValue = undefined;
    const result = getColor(testValue, showSign);
    expect(result).toBeUndefined;
  });
});
