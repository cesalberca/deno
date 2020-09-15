const wasm = await Deno.readFile("./add.wasm");
const wasmModule = new WebAssembly.Module(wasm);
const wasmInstance = new WebAssembly.Instance(wasmModule);
// @ts-ignore
console.log(wasmInstance.exports.add(1, 2));
