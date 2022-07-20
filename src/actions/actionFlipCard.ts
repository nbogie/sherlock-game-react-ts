import { GameState } from "../gameCore/gameState";
import { Card, SlotNumber } from "../gameCore/types";

export function actionFlipCard(
  gameState: GameState,
  slot: SlotNumber,
  card: Card
): GameState {
  console.log("would flip card at slot: ", slot, card);
  return {
    ...gameState,
    markerPos: slot,
    inPlayCards: gameState.inPlayCards.map((c) =>
      c.id === card.id ? { ...c, isFaceUp: true } : { ...c }
    ),
    phase: "MoveMarker",
  };
}
