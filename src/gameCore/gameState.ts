import { makeDeck } from "./deck";
import { Phase } from "./phase";
import { makePlayers } from "./players";
import { Card, NumberOfPlayers, Player, SlotNumber } from "./types";

export interface GameState {
  deck: Card[];
  inPlayCards: Card[];
  markerPos: SlotNumber | null;
  phase: Phase;
  players: Player[];
  currentPlayerId: string;
}

export function createInitialState(numPlayers: NumberOfPlayers): GameState {
  const allCards = makeDeck();
  const inPlayCards = allCards
    .slice(0, 8)
    .map((c) => ({ ...c, isFaceUp: true }));

  const deck = allCards.slice(8);
  const players = makePlayers(numPlayers);
  return {
    deck,
    inPlayCards,
    phase: "Memorise",
    markerPos: null,
    players,
    currentPlayerId: players[0].id,
  };
}
