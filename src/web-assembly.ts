const base64 = 'AGFzbQEAAAABCgJgAABgAn9/AX8DAwIAAQQFAXABAQEFAwEAAgYrB38BQYCIBAt/AEGACAt/AEGACAt/AEGACAt/AEGAiAQLfwBBAAt/AEEBCwd9CQZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwAAA2FkZAABDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19oZWFwX2Jhc2UDBA1fX21lbW9yeV9iYXNlAwUMX190YWJsZV9iYXNlAwYKQgICAAs9AQZ/I4CAgIAAIQJBECEDIAIgA2shBCAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBSAGaiEHIAcPCwAgBG5hbWUBGQIAEV9fd2FzbV9jYWxsX2N0b3JzAQNhZGQAJglwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEFY2xhbmcGMTAuMC4w\n'

function decode(base64: string) {
    const str = atob(base64);
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i ++)
        bytes[i] = str.charCodeAt(i);
    return bytes;
}

const wasmModule = new WebAssembly.Module(decode(base64));
const wasmInstance = new WebAssembly.Instance(wasmModule);
console.log(wasmInstance.exports.add(1, 2));
