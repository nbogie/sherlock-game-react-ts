import { GameState } from "../gameCore/gameState";
import { addCardToPlayerWinnings } from "../gameCore/players";
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
    c.id === wonCard.id
      ? { ...newCard, isFaceUp: true }
      : { ...c, isFaceUp: false }
  );

  return {
    ...gameState,
    deck: newDeck,
    inPlayCards: newInPlayCards,
    markerPos: null,
    players: gameState.players.map((p) =>
      p.id === gameState.currentPlayerId
        ? addCardToPlayerWinnings(wonCard, p)
        : p
    ),
    phase: "WaitEndTurnAck",
  };
}
