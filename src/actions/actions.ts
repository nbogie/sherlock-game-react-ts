import { Card, SlotNumber } from "../gameCore/types";

export type Action =
  | HideAllAction
  | GuessAction
  | PlaceMarkerAction
  | UnhideAllAction
  | FlipCardAction
  | EndTurnAction
  | AckGoodGuessAction;

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

export interface FlipCardAction {
  type: "flip-card";
  slotNumber: SlotNumber;
  card: Card;
}

export interface UnhideAllAction {
  type: "unhide-all";
}

export interface AckGoodGuessAction {
  type: "ack-good-guess";
}
export interface EndTurnAction {
  type: "end-turn";
}
