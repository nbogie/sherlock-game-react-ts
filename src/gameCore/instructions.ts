import { Phase } from "./phase";

export function getInstructionForPhase(phase: Phase): string {
  const instructions: Record<Phase, string> = {
    Guess: "Say, then click card",
    HideAll: "",
    InitialPlacement: "Place Sherlock!",
    Memorise: "Remember what you see!",
    MoveMarker: "Right?: Move Sherlock\nWrong?: end turn",
    WaitEndTurnAck: "End turn",
    GameOver: "Game Over!",
    WaitForCardWinAck: "Take the card you won!",
  };
  return instructions[phase];
}
