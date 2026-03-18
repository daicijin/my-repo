import { expect, test } from "vitest"
import { EvenOrOdd } from "."

test("should return 'Even' for even numbers", () => {
  const result = EvenOrOdd(4)
  expect(result).toBe("Even")
})

test("should return 'Odd' for odd numbers", () => {
  const result = EvenOrOdd(5)
  expect(result).toBe("Odd")
})
