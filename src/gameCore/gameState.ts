import { makeDeck } from "./deck";
import { Phase } from "./phase";
import { Card } from "./types";

export interface GameState {
  deck: Card[];
  inPlayCards: Card[];
  phase: Phase;
}

export function createInitialState(): GameState {
  const allCards = makeDeck();
  const inPlayCards = allCards.slice(0, 8);
  const deck = allCards.slice(8);

  return {
    deck,
    inPlayCards,
    phase: "Memorise",
  };
}
