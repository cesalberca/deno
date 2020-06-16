import { assertEquals } from "https://deno.land/std@0.57.0/testing/asserts.ts";
import { Flipper } from "./flipper.ts";

Deno.test("should flip a word whose length is even", () => {
  const flipper = new Flipper();

  const actual = flipper.flip("hola");

  assertEquals(actual, "laho");
});
