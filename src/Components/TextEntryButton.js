import React, {Component} from 'react';
// Make webpack aware of the CSS file.
// Not updated here:
//import './Person.css'; 

// Create a function.
const TextEntryButton = (props) => {
    return (
        <div >
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

// Person holds this function. (?)
export default TextEntryButton;