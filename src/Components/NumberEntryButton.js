import React, {Component} from 'react';
// Make webpack aware of the CSS file.
// Not updated here:
//import './Person.css'; 

// Create a function.
// When a value is not used, it gets grayed out.
const NumberEntryButton = (props) => {
    return (
        <div >
            <input type="number" onChange={props.changed} value={props.value} min={props.min} max={props.max}/>
        </div>
    )
};

// Person holds this function. (?)
export default NumberEntryButton;