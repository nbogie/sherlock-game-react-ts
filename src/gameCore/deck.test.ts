import { countOccurrences, countUnique } from "./collectionUtils";
import { makeDeck } from "./deck";
import { Movement } from "./types";

test("has correct length", () => {
  expect(makeDeck()).toHaveLength(49);
});

test("has unique emojis", () => {
  const emojisOnCards = makeDeck().map((c) => c.emoji);
  expect(countUnique(emojisOnCards)).toBe(emojisOnCards.length);
});

test("check deck has correct distribution of movements", () => {
  const cards = makeDeck();

  function makeKeyForMovement({ amount, direction }: Movement) {
    return direction + "-" + amount;
  }

  const occurrences = countOccurrences(
    cards.map((c) => c.movement),
    makeKeyForMovement
  );

  const entries = Object.entries(occurrences).sort(([a], [b]) =>
    a < b ? -1 : 1
  );

  expect(entries).toStrictEqual([
    ["left-1", 7],
    ["left-2", 7],
    ["left-3", 7],
    ["left-4", 5],
    ["right-1", 6],
    ["right-2", 6],
    ["right-3", 6],
    ["right-4", 5],
  ]);
});
