import { GameState } from "../gameCore/gameState";

export function actionUnhideAll(gameState: GameState): GameState {
  return {
    ...gameState,
    inPlayCards: gameState.inPlayCards.map((c) => ({ ...c, isFaceUp: true })),
  };
}
