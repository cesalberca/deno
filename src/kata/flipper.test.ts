import { assertEquals } from "https://deno.land/std@0.57.0/testing/asserts.ts";
import { Flipper } from "./flipper.ts";

Deno.test("should read from a file", async () => {
  const flipper = new Flipper();

  const actual = await flipper.open('file-fixture.txt');

  assertEquals(actual, "Foo");
});
