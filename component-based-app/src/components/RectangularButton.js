import React from "react";
import "../css/button.css"
const RectangularButton = (props) => {
return(<button id= {props.id } className="custom-button" onClick={props.onClick}>{props.text}</button>)
}
export default RectangularButton;