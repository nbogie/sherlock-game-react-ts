import { GameState } from "../gameCore/gameState";
import { nextPlayerId } from "../gameCore/players";

export function actionEndTurn(gameState: GameState): GameState {
  return {
    ...gameState,
    inPlayCards: gameState.inPlayCards.map((c) => ({ ...c, isFaceUp: false })),
    markerPos: null,
    currentPlayerId: nextPlayerId(gameState),
    phase: "InitialPlacement",
  };
}
