import { pick, shuffle } from "./collectionUtils";
import { Card, SlotNumber } from "./types";

export function makeDeck(): Card[] {
  const allEmojis =
    "🐶 🦁 🚁 ❤️ 🌈 🧲 ⏰ ⚽️ ❤️ 🔒 🍀 🍦 💎 🎁 ✂️ 🏴‍☠️ 🎈 🏓 🍫 🍰 🍕 🍓 🍉 🥕 ☃️ 🌼 🍄 🐚 🐝 🐤 👓 🎩 🎓".split(
      " "
    );
  //TODO: have a fixed distribution of left, right and number, not random.
  return shuffle([...allEmojis]).map((emoji, index) => {
    return {
      emoji,
      id: index + 1,
      isFaceUp: false,
      movement: {
        direction: pick(["left", "right"]),
        amount: pick([1, 2, 3, 4]),
      },
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
