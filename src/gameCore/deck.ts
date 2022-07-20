import { pick, shuffle } from "./collectionUtils";
import { Card } from "./types";

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
