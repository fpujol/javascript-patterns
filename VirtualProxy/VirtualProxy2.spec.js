const { getMessage1, getMessage2 } = require("./VirtualProxy2");

describe("Virtual Proxy 2", () => {
  test("GetMessage1 check", () => {
    expect(getMessage1()).toBe("World!");
  });

  test("GetMessage2 check", () => {
    expect(getMessage2()).toBe("World!");
  });
});
