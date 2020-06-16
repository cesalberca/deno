export class Flipper {
  flip(word: string) {
    const half = word.length / 2;
    const firstHalf = word.slice(0, half);
    const secondHalf = word.slice(half, word.length);
    return secondHalf + firstHalf;
  }
}
