import { GameState } from "../gameCore/gameState";
import { Card, SlotNumber } from "../gameCore/types";

export function actionTakeWonCard(
  gameState: GameState,
  slot: SlotNumber,
  wonCard: Card
): GameState {
  const newDeck = [...gameState.deck];
  const newCard = newDeck.pop();
  if (!newCard) {
    throw new Error("deck ran out - that should be impossible!");
  }
  const newInPlayCards = gameState.inPlayCards.map((c) =>
    c.id === wonCard.id ? newCard : c
  );

  return {
    ...gameState,
    deck: newDeck,
    inPlayCards: newInPlayCards,
    markerPos: null,
    phase: "WaitEndTurnAck",
  };
}
