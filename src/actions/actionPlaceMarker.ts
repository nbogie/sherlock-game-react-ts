import { cardAlreadyFlippedAt } from "../gameCore/deck";
import { GameState } from "../gameCore/gameState";
import { SlotNumber } from "../gameCore/types";

export function actionPlaceMarker(
  gameState: GameState,
  slot: SlotNumber
): GameState {
  if (cardAlreadyFlippedAt(gameState.inPlayCards, slot)) {
    console.log(
      "remove card, give it to current player, replenish circle, next player",
      slot
    );
    return {
      ...gameState,
      markerPos: slot,
      phase: "WaitForCardWinAck",
    };
  } else {
    return {
      ...gameState,
      markerPos: slot,
      phase: "Guess",
    };
  }
}
