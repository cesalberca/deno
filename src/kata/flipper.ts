export class Flipper {
  flip(string: string) {
    return string.split("\n").map(word => {
      const isOdd = word.length % 2 !== 0;
      const half = Math.floor(word.length / 2) + (isOdd ? 1 : 0);
      const firstHalf = word.slice(0, half);
      const secondHalf = word.slice(half, word.length);
      return secondHalf + firstHalf
    }).join("\n");
  }
}
