import React, { useState } from "react";
import {useFlip} from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

  const [cardState, setCardState] = useFlip()
  
  return (
    <img
      // src={isFacingUp ? front : back}
      src={cardState ? front : back}
      alt="playing card"
      // onClick={flipCard}
      onClick={setCardState}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
