import { useState } from "react";
import { NumberOfPlayers } from "./gameCore/types";

interface LobbyControlsProps {
    startGame: (numPlayers: NumberOfPlayers) => void;
}
export function LobbyControls(props: LobbyControlsProps) {
    const [numOfPlayers, setNumOfPlayers] = useState<NumberOfPlayers>(2);

    return (
        <div>
            <input
                type="number"
                value={numOfPlayers}
                min={1} max={5}
                onChange={(e) => setNumOfPlayers(parseInt(e.target.value) as NumberOfPlayers)}
            />
            <button onClick={() => { props.startGame(numOfPlayers) }}>Start {numOfPlayers} player game!</button>
        </div>
    )
}
