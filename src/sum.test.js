import {sum} from "./sum";
// import {jest} from "@jest/globals";

// jest.useFakeTimers();
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
