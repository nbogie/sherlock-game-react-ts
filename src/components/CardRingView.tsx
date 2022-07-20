import { makeDeck } from "../gameCore/deck";
import { Card } from "../gameCore/types";

export function CardRingView() {

    const layout: [Card, number][] = makeDeck().slice(0, 8).map((card: Card, index: number) => ([card, index]))
    return (
        <div className="cardRing">
            {layout.map(([card, index]) => (
                <div
                    className={"card rot" + (index * 45)}
                    key={card.id}
                >
                    <div className="arrowBar">{card.movement.amount} {card.movement.direction === "left" ? "⬅" : "➡"}</div>
                    <div className="pictureArea">{card.emoji}</div>
                </div>
            ))
            }
            <div className="marker rot0">

            </div>
            <div className="marker rot45">

            </div>
            <div className="marker rot90">

            </div>
            <div className="marker rot135">

            </div>
            <div className="marker rot180">

            </div>
            <div className="marker rot225">

            </div>
            <div className="marker rot270">

            </div>
            <div className="marker rot315">

            </div>
        </div >
    )
}
