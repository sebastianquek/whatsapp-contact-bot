import { parseMobileNumber } from "../parseMobileNumber";

describe("parseMobileNumber", () => {
  it.each([
    ["123", 123],
    ["62353535", 62353535],
    ["+65 62353535", 6562353535],
    ["62 35  35 35   ", 62353535],
    ["+65 62 35  35 35   ", 6562353535],
    ["  6235 3535 ", 62353535],
  ])(
    "should parse valid numbers correctly: %s",
    (text: string, expected: number) => {
      expect(parseMobileNumber(text)).toStrictEqual(expected);
    }
  );

  it.each([
    [""],
    ["  "],
    ["asd$@/"],
    ["a123"],
    ["6235a3535"],
    ["++62 35  35 35   "],
  ])("should return undefined for invalid numbers: %s", (text: string) => {
    expect(parseMobileNumber(text)).toStrictEqual(undefined);
  });
});
