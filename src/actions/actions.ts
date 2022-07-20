import { SlotNumber } from "../gameCore/types";

export type Action =
  | HideAllAction
  | GuessAction
  | PlaceMarkerAction
  | UnhideAllAction;

export interface HideAllAction {
  type: "hide-all";
}

export interface GuessAction {
  type: "guess";
}

export interface PlaceMarkerAction {
  type: "place-marker";
  slotNumber: SlotNumber;
}

export interface UnhideAllAction {
  type: "unhide-all";
}
