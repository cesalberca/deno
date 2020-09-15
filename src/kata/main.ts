import {
  ensureFile
} from "https://deno.land/std@0.69.0/fs/mod.ts";
import { Flipper } from "./flipper.ts";

const frameworks = await Deno.readTextFileSync("./frameworks.txt");
const flipper = new Flipper();
const flippedFrameworks = flipper.flip(frameworks);
await ensureFile("./worksframe.txt");
await Deno.writeTextFileSync("./worksframe.txt", flippedFrameworks);
