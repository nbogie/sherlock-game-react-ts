import { useReducer } from "react";
import { reducerFunction } from "../actions/reducerFunction";
import { createInitialState, GameState } from "../gameCore/gameState";
import { Card } from "../gameCore/types";
import { CardRingView } from "./CardRingView";

export function MemoryRingGame() {
    const initialState: GameState = createInitialState();
    const [gameState, dispatch] = useReducer(reducerFunction, initialState);

    function handleStart() {
        dispatch({ type: "hide-all" });
    }
    function handleUnhideAll() {
        dispatch({ type: "unhide-all" });
    }
    function handleGoodGuess() {
        dispatch({ type: "ack-good-guess" });
    }
    function handleEndTurn() {
        dispatch({ type: "end-turn" });
    }
    return (
        <div className="memoryRingGame">
            Game Phase: {gameState.phase}
            <div className="controls">
                {gameState.phase === "Memorise" && <button onClick={handleStart}>Memorised - Hide them!</button>}
                {gameState.phase === "Flipped" && <button onClick={handleEndTurn}>End Turn!</button>}
                {gameState.phase === "Flipped" && <button onClick={handleGoodGuess}>I guessed ok!</button>}
                {<button onClick={handleUnhideAll}>Unhide all!</button>}
            </div>
            <CardRingView
                inPlayCards={gameState.inPlayCards}
                handleMarkerClick={(slotNumber, card: Card) => { dispatch({ type: "place-marker", slotNumber }) }}
                handleCardClick={(slotNumber, card: Card) => { dispatch({ type: "flip-card", slotNumber, card }) }}
                markerSlotNumber={gameState.markerPos}
            />

        </div >
    )
}
