import { GameState } from "../gameCore/gameState";

export function actionAckGoodGuess(gameState: GameState): GameState {
  console.log("ack good guess. play on!");
  return {
    ...gameState,
    phase: "MoveMarker",
  };
}
