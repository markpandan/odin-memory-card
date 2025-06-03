// This function was based on the Fisher-Yates Sorting Algorithm
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export default function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
