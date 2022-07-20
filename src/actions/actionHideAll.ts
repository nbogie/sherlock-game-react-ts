import { GameState } from "../gameCore/gameState";

export function actionHideAll(gameState: GameState): GameState {
  return {
    ...gameState,
    inPlayCards: gameState.inPlayCards.map((c) => ({ ...c, isFaceUp: false })),
    phase: "InitialPlacement",
  };
}
