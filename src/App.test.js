import Today from "./Today";

test("App returns the right date format", () => {
  const day = Today({ date: "1992-05-27" });
  expect(day).toBe("Today is Wednesday 27/5/1992");
});
