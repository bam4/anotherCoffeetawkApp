import React, {Component} from 'react';
// Make webpack aware of the CSS file.
//import './Person.css'; 

// Create a function.
const SingleDataEntry = (props) => {
    return (
        <div className="Person">
            <p>ID={props.id}</p>
            <p>Consumption Level={props.consumptionLevel}</p>
            <p>Tech Level={props.techLevel}</p>
        </div>
    )
};

// Person holds this function.
export default SingleDataEntry;