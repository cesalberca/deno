import { readFileStr } from 'https://deno.land/std@0.57.0/fs/read_file_str.ts';


export class Flipper {
  async open(filename: string) {
    const file = await readFileStr(filename);
    
    const lines = file.split("\n")



    return file;
  }
}
