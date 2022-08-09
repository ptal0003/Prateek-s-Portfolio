import React from "react";
function RadioButton(props){
return( 
<div>
<input type="radio" value={props.value} name={props.name} onChange = {props.onChange} /> {props.value}
</div>)
}
export default RadioButton;