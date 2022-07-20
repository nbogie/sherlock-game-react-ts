import { makeDeck } from "./deck";
import { Phase } from "./phase";
import { makePlayers } from "./players";
import { Card, Player, SlotNumber } from "./types";

export interface GameState {
  deck: Card[];
  inPlayCards: Card[];
  markerPos: SlotNumber | null;
  phase: Phase;
  players: Player[];
}

export function createInitialState(): GameState {
  const allCards = makeDeck();
  const inPlayCards = allCards
    .slice(0, 8)
    .map((c) => ({ ...c, isFaceUp: true }));

  const deck = allCards.slice(8);
  const players = makePlayers(2);
  return {
    deck,
    inPlayCards,
    phase: "Memorise",
    markerPos: null,
    players,
  };
}
