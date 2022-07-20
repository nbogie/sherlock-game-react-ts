import { makeDeck } from "./deck";
import { Phase } from "./phase";
import { Card, SlotNumber } from "./types";

export interface GameState {
  deck: Card[];
  inPlayCards: Card[];
  markerPos: SlotNumber | null;
  phase: Phase;
}

export function createInitialState(): GameState {
  const allCards = makeDeck();
  const inPlayCards = allCards
    .slice(0, 8)
    .map((c) => ({ ...c, isFaceUp: true }));

  const deck = allCards.slice(8);

  return {
    deck,
    inPlayCards,
    phase: "Memorise",
    markerPos: null,
  };
}
