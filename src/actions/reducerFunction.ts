import { GameState } from "../gameCore/gameState";
import { Phase } from "../gameCore/phase";
import { actionEndTurn } from "./actionEndTurn";
import { actionFlipCard } from "./actionFlipCard";
import { actionHideAll } from "./actionHideAll";
import { actionPlaceMarker } from "./actionPlaceMarker";
import { actionRevealAfterGameOver } from "./actionRevealAfterGameOver";
import { Action } from "./actions";
import { actionTakeWonCard } from "./actionTakeWonCard";

export function reducerFunction(
  gameState: GameState,
  action: Action
): GameState {
  const actionToAcceptablePhaseLookup: Record<string, Phase | Phase[] | "any"> =
    {
      "hide-all": "Memorise",
      "place-marker": ["InitialPlacement", "MoveMarker"],
      "flip-card": "Guess",
      "end-turn": ["MoveMarker", "WaitEndTurnAck"],
      "take-won-card": "WaitForCardWinAck",
      "reveal-after-game-over": "GameOver",
    };

  const isOkOrError = verifyGamePhase(
    gameState,
    action,
    actionToAcceptablePhaseLookup[action.type]
  );

  if (isOkOrError !== "ok") {
    console.log(isOkOrError);

    return gameState;
  }

  switch (action.type) {
    case "hide-all": {
      return actionHideAll(gameState);
    }
    case "place-marker": {
      return actionPlaceMarker(gameState, action.slotNumber);
    }
    case "end-turn": {
      return actionEndTurn(gameState);
    }
    case "flip-card": {
      return actionFlipCard(gameState, action.slotNumber, action.card);
    }
    case "take-won-card": {
      return actionTakeWonCard(gameState, action.slotNumber, action.card);
    }
    case "reveal-after-game-over": {
      return actionRevealAfterGameOver(gameState);
    }
    default:
      console.error("error, unhandled action type", action.type);
      break;
  }
  return gameState;
}

export function verifyGamePhase(
  gameState: GameState,
  action: Action,
  expectedPhaseOrPhases: Phase | Phase[] | "any"
): "ok" | string {
  if (expectedPhaseOrPhases === "any") {
    return "ok";
  }

  if (!Array.isArray(expectedPhaseOrPhases)) {
    expectedPhaseOrPhases = [expectedPhaseOrPhases];
  }

  const isOk = expectedPhaseOrPhases.includes(gameState.phase);
  if (isOk) {
    return "ok";
  }

  return (
    "Ignoring unexpected action: " +
    action.type +
    " in game phase " +
    gameState.phase +
    " - only valid in phase(s) " +
    expectedPhaseOrPhases.join(" | ")
  );
}
