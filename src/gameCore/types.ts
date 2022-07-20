export type MovementAmount = 1 | 2 | 3 | 4;
export type Direction = "left" | "right";

export interface Movement {
  direction: Direction;
  amount: MovementAmount;
}
export interface Card {
  emoji: string;
  id: number;
  movement: Movement;
  isFaceUp: boolean;
}

export type SlotNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Player {
  id: string;
  name: string;
  cardsWon: Card[];
}
