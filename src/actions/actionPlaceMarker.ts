import { GameState } from "../gameCore/gameState";
import { SlotNumber } from "../gameCore/types";

export function actionPlaceMarker(
  gameState: GameState,
  slot: SlotNumber
): GameState {
  console.log("would place marker at slot: ", slot);
  return {
    ...gameState,
    markerPos: slot,
    phase: "Guess",
  };
}
