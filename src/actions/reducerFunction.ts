import { GameState } from "../gameCore/gameState";
import { Phase } from "../gameCore/phase";
import { actionAckGoodGuess } from "./actionAckGoodGuess";
import { actionEndTurn } from "./actionEndTurn";
import { actionFlipCard } from "./actionFlipCard";
import { actionHideAll } from "./actionHideAll";
import { actionPlaceMarker } from "./actionPlaceMarker";
import { Action } from "./actions";
import { actionUnhideAll } from "./actionUnhideAll";

export function reducerFunction(
  gameState: GameState,
  action: Action
): GameState {
  const actionToAcceptablePhaseLookup: Record<string, Phase | Phase[] | "any"> =
    {
      "hide-all": "Memorise",
      "place-marker": ["InitialPlacement", "MoveMarker"],
      "unhide-all": "any",
      "flip-card": "Guess",
      "ack-good-guess": "Flipped",
      "end-turn": "Flipped",
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
    case "unhide-all": {
      return actionUnhideAll(gameState);
    }
    case "place-marker": {
      return actionPlaceMarker(gameState, action.slotNumber);
    }
    case "end-turn": {
      return actionEndTurn(gameState);
    }
    case "ack-good-guess": {
      return actionAckGoodGuess(gameState);
    }
    case "flip-card": {
      return actionFlipCard(gameState, action.slotNumber, action.card);
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
