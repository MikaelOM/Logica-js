const { countCharacters } = require("../src/challenges/countCharacters");

describe("countCharacters", () => {
  it("should count characters correctly", () => {
    expect(countCharacters("ana")).toEqual({
      a: 2,
      n: 1,
    });
  });

  it("should return empty object for empty string", () => {
    expect(countCharacters("")).toEqual({});
  });
});
