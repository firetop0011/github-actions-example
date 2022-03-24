import Today from "./Today";

test("App returns the right date format", () => {
  const day = Today(new Date());
  expect(day).toBe("Today is Thursday 24/3/2022");
});
