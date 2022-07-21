import { collect, sample, shuffle } from "./collectionUtils";
import { Card, Movement, MovementAmount, SlotNumber } from "./types";

export function makeDeck(): Card[] {
  const split = (str: string) => str.split(" ");

  const foods = split(
    "🍫 🍰 🍕 🍓 🍉 🥕 🍭 🍦 🍋 🍌 🍇 🥭 🥥 🥝 🥑 🥦 🌽 🫒 🥖 🧀 🥞 🥓 🍗 🍔 🌮 🥗 🍬 🍩 🍪 ☕"
  );
  const animals = split(
    "🐶 🦁 🦊 🐝 🐤 🦄 🦖 🐲 🐵 🦧 🐺 🐯 🐮 🐷 🐖 🦒 🐘 🦏 🦛 🐹 🐰 🐿️ 🦔 🦇 🐻 🐨 🐼 🐧 🦉 🐸 🐊 🐢 🐍 🐳 🐬 🦈 🐙 🐌 🦋 🐛 🐜 🕷️ 🦂 🦞 🦑 ☃️ 🐚"
  );
  const creatures = split("👨🏼‍🚒 🧚🏼 👽 🥷🏽 ☠️ 👩🏼‍🍳 🧙🏽‍♂️ 🧛🏻‍♀️ 🧟 👩🏾‍🔬 🎃");

  const clothing = split("👓 🕶 🎩 🧢 👑 🪖 👢 🧦 👠 🩴 🧤 🧣 🌂 🎒");

  const misc1 = split(
    "❤️ 🌈 ⚽️ 💎 🎁 🏴‍☠️ 🎈 🏓 🪚 📸 🔒 🧵 🪡 ✂️ 🧲 ⏰ 🎲 🩺 🪣 ✏️ 🔑 💡 🌼 🍄 🌵 🌴 🍁 🍀 🌙 🌍 🔥 🌪 ⚡️ 🌊 ⚓️ ⛺️ 🧸"
  );
  const misc2 = split(
    "🪁 🏹 🛹 🛼 🛷 🎾 🏅 🥁 🎸 🎻 🎺 🎤 🚁 🏎 🚌 🚜 🚂 ✈️ 🚀 🛶"
  );
  const allEmojis = shuffle([
    ...sample(animals, 9),
    ...sample(foods, 8),
    ...sample(clothing, 8),
    ...sample(creatures, 8),
    ...sample(misc1, 8),
    ...sample(misc2, 8),
  ]).slice(0, 49); //there should be 49 here, anyway.

  const movementDistributions: [number, MovementAmount][] = [
    [13, 1],
    [13, 2],
    [13, 3],
    [10, 4],
  ];

  const movements: Movement[] = shuffle(
    movementDistributions.flatMap(([count, value]) =>
      collect(count, (ix) => ({
        direction: ix < count / 2 ? "left" : "right",
        amount: value,
      }))
    )
  );

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
