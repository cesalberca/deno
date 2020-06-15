import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("should add value", () => {
  const actual = 1 + 2;

  assertEquals(actual, 3);
});
