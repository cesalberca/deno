export class Flipper {
  flip(word: string) {
    const firstHalf = word.slice(0, word.length / 2);
    const secondHalf = word.slice(word.length / 2, word.length);
    return secondHalf + firstHalf;
  }
}
