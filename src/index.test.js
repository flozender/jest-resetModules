test("require.main is set", () => {
  const { getMain } = require("./index.js");
  expect(getMain()).toBeTruthy();
});

test("require from main works", () => {
  const { requireFromMain } = require("./index.js");
  expect(requireFromMain("../package.json")).toBeTruthy();
});
