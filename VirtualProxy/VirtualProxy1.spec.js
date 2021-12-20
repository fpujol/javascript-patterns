const { getMessage1, getMessage2 } = require("./VirtualProxy1");

test("GetMessage1 check", () => {
  expect(getMessage1()).toBe("Hello");
});

test("GetMessage2 check", () => {
  expect(getMessage2()).toBe("Everyone");
});
