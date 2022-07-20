import { collect, shuffle } from "./collectionUtils";
import { Card, Movement, MovementAmount, SlotNumber } from "./types";

export function makeDeck(): Card[] {
  const allEmojis: string[] =
    "🐶 🦁 🦊 🐝 🐤 🦄 🦖 🐲 🎺 🚁 ❤️ 🌈 ⚽️ 🍀 💎 🎁 🏴‍☠️ 🎈 🏓 ☃️ 🌼 🍄 🐚 👓 🎩 🎓 👑 🎃 🍫 🍰 🍕 🍓 🍉 🥕 🍭 🍦 👢 🧤 🪚 📸 🔒 ✂️ 🧲 ⏰ 🩺 🪣 ✏️ 🔑 💡"
      .split(" ")
      .slice(0, 49); //there should be 49 here, anyway.

  const distributions: [number, MovementAmount][] = [
    [13, 1],
    [13, 2],
    [13, 3],
    [10, 4],
  ];

  const movements: Movement[] = [];
  for (const [count, value] of distributions) {
    const set: Movement[] = collect(count, (ix) => ({
      direction: ix < count / 2 ? "left" : "right",
      amount: value,
    }));
    movements.push(...set);
  }

  const shuffledMovements = shuffle([...movements]);
  return shuffle([...allEmojis]).map((emoji, index) => {
    return {
      emoji,
      id: index + 1,
      isFaceUp: false,
      movement: { ...shuffledMovements[index] },
    };
  });
}

export function cardAlreadyFlippedAt(
  inPlayCards: Card[],
  slotNum: SlotNumber
): boolean {
  return inPlayCards[slotNum].isFaceUp;
}

export function cardAtPos(inPlayCards: Card[], slotNum: SlotNumber): Card {
  return inPlayCards[slotNum];
}
