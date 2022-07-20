import { GameState } from "../gameCore/gameState";
import { Phase } from "../gameCore/phase";
import { actionHideAll } from "./actionHideAll";
import { actionPlaceMarker } from "./actionPlaceMarker";
import { Action } from "./actions";
import { actionUnhideAll } from "./actionUnhideAll";

export function reducerFunction(
  gameState: GameState,
  action: Action
): GameState {
  const actionToAcceptablePhaseLookup: Record<string, Phase | "any"> = {
    "hide-all": "Memorise",
    "place-marker": "InitialPlacement",
    "unhide-all": "any",
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
    default:
      console.error("error, unhandled action type", action.type);
      break;
  }
  return gameState;
}

export function verifyGamePhase(
  gameState: GameState,
  action: Action,
  expectedPhase: Phase | "any"
): "ok" | string {
  if (expectedPhase !== "any" && gameState.phase !== expectedPhase) {
    return (
      "Ignoring unexpected action: " +
      action.type +
      " in game phase " +
      gameState.phase +
      " - only valid in phase " +
      expectedPhase
    );
  } else {
    return "ok";
  }
}
