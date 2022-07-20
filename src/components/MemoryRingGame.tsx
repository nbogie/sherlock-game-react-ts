import { useReducer } from "react";
import { reducerFunction } from "../actions/reducerFunction";
import { cardAtPos } from "../gameCore/deck";
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
    function handleEndTurn() {
        dispatch({ type: "end-turn" });
    }
    function handleTakeWonCard() {
        if (gameState.markerPos === null) {
            throw new Error("null markerPos during handling of takeWonCard");
        }
        dispatch({ type: "take-won-card", slotNumber: gameState.markerPos, card: cardAtPos(gameState.inPlayCards, gameState.markerPos) });
    }


    return (
        <div className="memoryRingGame">
            Game Phase: {gameState.phase}
            <div className="controls">
                {gameState.phase === "Memorise" && <button onClick={handleStart}>Memorised - Hide them!</button>}
                {(gameState.phase === "MoveMarker" || gameState.phase === "WaitEndTurnAck") && <button onClick={handleEndTurn}>End Turn!</button>}
                {gameState.phase === "WaitForCardWinAck" && <button onClick={handleTakeWonCard}>Take won card!</button>}
                {<button onClick={handleUnhideAll}>Unhide all! (Cheat)</button>}
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
