import { useState } from "react";
import { NumberOfPlayers } from "./gameCore/types";

interface LobbyControlsProps {
    startGame: (numPlayers: NumberOfPlayers, upToNCards: number) => void;
}
export function LobbyControls(props: LobbyControlsProps) {
    const [numOfPlayers, setNumOfPlayers] = useState<NumberOfPlayers>(2);
    const [upToNCards, setUpToNCards] = useState<number>(6);

    return (
        <div>
            <h1>Memory Game - menu</h1>
            <div className="lobbyControls">
                <div>
                    Number of players: <input
                        type="number"
                        value={numOfPlayers}
                        min={1} max={5}
                        onChange={(e) => setNumOfPlayers(parseInt(e.target.value) as NumberOfPlayers)}
                    />
                </div >
                <div>Play first to <input
                    type="number"
                    value={upToNCards}
                    min={1} max={8}
                    onChange={(e) => setUpToNCards(parseInt(e.target.value))}
                /> cards</div>
            </div>


            <button onClick={() => { props.startGame(numOfPlayers, upToNCards) }}>Start {numOfPlayers} player game - first to {upToNCards} cards!</button>

        </div >
    )
}
