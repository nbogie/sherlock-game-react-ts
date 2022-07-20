import { useReducer } from "react";
import { reducerFunction } from "../actions/reducerFunction";
import { createInitialState, GameState } from "../gameCore/gameState";
import { CardRingView } from "./CardRingView";

export function MemoryRingGame() {
    const initialState: GameState = createInitialState();
    useReducer(reducerFunction, initialState);
    return (
        <div className="memoryRingGame">
            <CardRingView />
        </div >
    )
}
