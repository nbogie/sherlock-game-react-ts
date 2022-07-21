import { GameState } from "./gameState";
import { Phase } from "./phase";
import { currentPlayer, peekNextPlayer } from "./players";

export function getInstructionForPhase(
  phase: Phase,
  gameState: GameState
): string {
  const instructions: Record<Phase, string> = {
    Guess: "Say, then click card",
    HideAll: "",
    InitialPlacement: `Have ${
      peekNextPlayer(gameState).name
    } place Sherlock for ${currentPlayer(gameState).name}!`,
    Memorise: "Remember what you see!",
    MoveMarker: "Right?: Move Sherlock\nWrong?: end turn",
    WaitEndTurnAck: "End turn",
    GameOver: "Game Over!",
    WaitForCardWinAck: "Take the card you won!",
  };
  return instructions[phase];
}
