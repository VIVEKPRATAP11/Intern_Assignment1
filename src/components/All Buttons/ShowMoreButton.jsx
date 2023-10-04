import React, { useContext } from "react";
import "./ShowMoreButton.css";
import {LiaHourglassEndSolid} from "react-icons/lia"
import { houseContext } from "../../context";

function ShowMoreButton() {
  const {text, setText} = useContext(houseContext)
  const changeText = () => {
      if (text === "Show More") {
        setText("Show Less")
      }else {
        setText("Show More")
      }
  }
  console.log(text);
  return (
    <div className="show-more-container">
      <div className="show-more-button" onClick={changeText}>
        <LiaHourglassEndSolid className="hour-glass-icon"/>
        {text}</div>
    </div>
  );
}

export default ShowMoreButton;
