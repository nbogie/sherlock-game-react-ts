import { useReducer } from "react";
import { reducerFunction } from "../actions/reducerFunction";
import { cardAtPos } from "../gameCore/deck";
import { createInitialState, GameState } from "../gameCore/gameState";
import { getInstructionForPhase } from "../gameCore/instructions";
import { Card, NumberOfPlayers } from "../gameCore/types";
import { CardRingView } from "./CardRingView";
import { PlayersView } from "./PlayersView";

interface MemoryRingGameProps {
    numPlayers: NumberOfPlayers;
    upToNCards: number;
}

export function MemoryRingGame(props: MemoryRingGameProps) {
    const initialState: GameState = createInitialState(props.numPlayers, props.upToNCards);
    const [gameState, dispatch] = useReducer(reducerFunction, initialState);

    function handleStart() {
        dispatch({ type: "hide-all" });
    }

    function handleEndTurn() {
        dispatch({ type: "end-turn" });
    }
    function handleRevealAfterGameOver() {
        dispatch({ type: "reveal-after-game-over" });
    }
    function handleTakeWonCard() {
        if (gameState.markerPos === null) {
            throw new Error("null markerPos during handling of takeWonCard");
        }
        dispatch({ type: "take-won-card", slotNumber: gameState.markerPos, card: cardAtPos(gameState.inPlayCards, gameState.markerPos) });
    }

    const instruction = getInstructionForPhase(gameState.phase, gameState);
    return (
        <div className="memoryRingGame">
            <div className="phase">Phase: {gameState.phase}</div>

            {gameState.phase === "GameOver" && <div>Game Over!</div>}

            <div className="controls">
                {gameState.phase === "Memorise" && <button onClick={handleStart}>Memorised - Hide them!</button>}
                {(gameState.phase === "MoveMarker" || gameState.phase === "WaitEndTurnAck") && <button onClick={handleEndTurn}>End Turn!</button>}
                {gameState.phase === "WaitForCardWinAck" && <button onClick={handleTakeWonCard}>Take won card!</button>}
                {gameState.phase === "GameOver" && <button onClick={handleRevealAfterGameOver}>Reveal!</button>}
            </div>
            <PlayersView
                players={gameState.players}
                currentPlayerId={gameState.currentPlayerId}
            />
            <div className="playUpTo">Playing first to {gameState.playUpToNCards} card(s)</div>
            <div className="instruction">{instruction}</div>
            <CardRingView
                inPlayCards={gameState.inPlayCards}
                handleMarkerClick={(slotNumber, card: Card) => { dispatch({ type: "place-marker", slotNumber }) }}
                handleCardClick={(slotNumber, card: Card) => { dispatch({ type: "flip-card", slotNumber, card }) }}
                markerSlotNumber={gameState.markerPos}
            />

        </div >
    )
}
