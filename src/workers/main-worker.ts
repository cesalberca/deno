const worker = new Worker("./worker.ts", { type: "module", deno: true });
worker.postMessage({ filename: "./log.txt" });
