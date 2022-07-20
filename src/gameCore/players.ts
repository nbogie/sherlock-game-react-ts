import { collect } from "./collectionUtils";
import { Player } from "./types";

export function makePlayers(numPlayers: number): Player[] {
  function createOnePlayer(ix: number): Player {
    return { id: ix + 1 + "", name: "P" + (ix + 1), cardsWon: [] };
  }
  return collect(numPlayers, createOnePlayer);
}
