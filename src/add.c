int add(int a, int b) {
  return a + b;
}

clang --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o add.wasm add.c
brew install llvm
