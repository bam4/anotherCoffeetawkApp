import React, {Component} from 'react';
// Make webpack aware of the CSS file.
import './Person.css'; 

// Create a function.
const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}! I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    )
    
};

// Person holds this function.
export default Person;