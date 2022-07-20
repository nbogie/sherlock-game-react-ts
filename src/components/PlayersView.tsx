import { Player } from "../gameCore/types"
import { PlayerView } from "./PlayerView"

interface PlayersViewProps {
    players: Player[];
    currentPlayerId: string;
}
export function PlayersView(props: PlayersViewProps) {
    const { players, currentPlayerId } = props;
    return (<div>
        {players.map(player => (
            <PlayerView player={player} key={player.id} isActive={currentPlayerId === player.id} />
        ))}
    </div>)
}
