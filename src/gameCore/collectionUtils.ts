export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort((a, b) => Math.random() - 0.5);
}
/** pick and return one element at random of the given array.
 * @returns a random element of array, or undefined, if the given array is empty.
 */
export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Create an array of length numElems by calling the given callbackFn numElem times, each time passing it an index from 0 to n - 1, and collecting the returned values.
 *
 * @numElems number of elements to create
 * @callbackFn a function to call to create one element.
 *
 * @returns new array of numElems elements
 */
export function collect<T>(
  numElems: number,
  callbackFn: (ix: number) => T
): T[] {
  const arr = [];
  for (let i = 0; i < numElems; i++) {
    arr.push(callbackFn(i));
  }
  return arr;
}

export function countOccurrences<T>(
  movements: T[],
  makeKeyFor: (elem: T) => string
): Record<string, number> {
  const occs: Record<string, number> = {};
  for (const elem of movements) {
    const keyStr = makeKeyFor(elem);
    if (occs[keyStr] === undefined) {
      occs[keyStr] = 0;
    }
    occs[keyStr]++;
  }
  return occs;
}

export function countUnique<T>(arr: T[]): number {
  const set = new Set(arr);
  return set.size;
}
