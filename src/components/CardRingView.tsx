import { Card, SlotNumber } from "../gameCore/types";

interface CardRingViewProps {
    handleMarkerClick: (slotNumber: SlotNumber, card: Card) => void;
    inPlayCards: Card[];
    markerSlotNumber: SlotNumber | null;
}
export function CardRingView(props: CardRingViewProps) {

    const layout: [Card, number][] = props.inPlayCards.map((card: Card, index: number) => ([card, index]))
    return (
        <div className="cardRing">
            {layout.map(([card, index]) => {
                const facingClass = card.isFaceUp ? "faceUp" : "faceDown";
                return (
                    <div
                        className={"card " + facingClass + " rot" + (index * 45)}
                        key={card.id}
                    >
                        {card.isFaceUp ? <>
                            <div className="arrowBar">{card.movement.amount} {card.movement.direction === "left" ? "⬅" : "➡"}</div>
                            <div className="pictureArea">{card.emoji}</div>
                        </> :
                            <div className="faceDown"></div>}
                    </div>
                )
            })
            }
            {
                layout.map(([card, index]) => {
                    const isFilled = index === props.markerSlotNumber;
                    const fillStateClass = isFilled ? "filled" : "unfilled";
                    return (
                        <div
                            className={"marker " + fillStateClass + " rot" + (index * 45)}
                            onClick={() => props.handleMarkerClick(index as SlotNumber, card)}
                            key={index}
                        >
                            {isFilled && <>🕵🏽‍♀️</>}
                        </div>
                    )
                })
            }

        </div >
    )
}
