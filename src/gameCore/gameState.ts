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
  playUpToNCards: number;
  currentPlayerId: string;
}

export function createInitialState(
  numPlayers: NumberOfPlayers,
  upToNCards: number
): GameState {
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
    playUpToNCards: upToNCards,
    currentPlayerId: players[0].id,
  };
}

export function isGameOver(gameState: GameState): boolean {
  return gameState.players.some(
    (p) => p.cardsWon.length >= gameState.playUpToNCards
  );
}

export function findWinner(
  players: Player[],
  upToNCards: number
): Player | null {
  return players.find((p) => p.cardsWon.length >= upToNCards) ?? null;
}
