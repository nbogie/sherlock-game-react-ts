import { GameState } from "../gameCore/gameState";

export function actionEndTurn(gameState: GameState): GameState {
  console.log("ack end turn");
  return {
    ...gameState,
    inPlayCards: gameState.inPlayCards.map((c) => ({ ...c, isFaceUp: false })),
    markerPos: null,
    phase: "InitialPlacement",
  };
}
