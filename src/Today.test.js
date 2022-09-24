import Today from "./Today"

test("App returns the right date format", () => {
  const day = Today({ date: "1992-05-27" })
  expect(day).toBe("You are alive on Wednesday 27/5/1992. Well done.")
})
