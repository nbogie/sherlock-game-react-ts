import { collect } from "./collectionUtils";
import { GameState } from "./gameState";
import { Card, Player } from "./types";

export function makePlayers(numPlayers: number): Player[] {
  function createOnePlayer(ix: number): Player {
    return { id: ix + 1 + "", name: "P" + (ix + 1), cardsWon: [] };
  }
  return collect(numPlayers, createOnePlayer);
}

/** Return the id of the next player who should take a turn (not their index position!)
 *
 */
export function nextPlayerId({ players, currentPlayerId }: GameState): string {
  const currIx = players.findIndex((p) => p.id === currentPlayerId);
  if (currIx === -1) {
    const actualIdsStr = players.map((p) => p.id).join(", ");
    throw new Error(
      `Can't find expected player in players with ids ${actualIdsStr} with id ${currentPlayerId}`
    );
  }
  const nextIx = (currIx + 1) % players.length;
  return players[nextIx].id;
}

export function addCardToPlayerWinnings(wonCard: Card, p: Player): Player {
  const newCards = [...p.cardsWon, { ...wonCard }];
  return { ...p, cardsWon: newCards };
}
