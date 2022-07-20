import { Player } from "../gameCore/types";

interface PlayerViewProps {
    player: Player;
    isActive: boolean;
}
export function PlayerView(props: PlayerViewProps) {
    const { player, isActive } = props;
    const activeClass = isActive ? "active" : "inactive";
    const indicator = isActive ? "🧐" : "😴";
    return <div className={"player " + activeClass}>{indicator} <span className={activeClass}>{player.name}</span>: ({player.cardsWon.length} cards)</div>
}