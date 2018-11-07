import React, {Component} from 'react';
// Make webpack aware of the CSS file.
//import './Person.css'; 




// Coded Variables:

// Tech Count:
// 0 = No phone or computer.
// 1 = Phone.
// 2 = Computer.

// Drink Size:
// - 1 = Drinking a competitor's coffee in Starbucks.
// 0 = Not drinking any Starbucks beverages.
// 1 = Small Coffee
// 2 = Medium Coffee
// 3 = Large Coffee





// // Our Data:
// const data = [
//     {techCount:0.0, drinkSize: 1.0},
//    ];
    
// // //store our n
// const n = data.length;

// //sum of x^2
const xSquaredSum = (data) => {
    let count = 0;
    for(let i=0;i<data.length;i++) {
        count = Math.pow(data[i].techLevel, 2) + count;
    }
    return count;
}

// // // //sum of y^2
const ySquaredSum = (data) => {
    let count = 0;
    for(let i=0;i<data.length;i++) {
        count = Math.pow(data[i].consumptionLevel, 2) + count;
    }
    return count;
}

// // // //(sum of x)^2
const sumXSquared = (data) => {
    let count = 0;
    for(let i=0;i<data.length;i++) {
        count = data[i].techLevel + count;
    }
    return Math.pow(count,2);
}

// // // //(sum of y)^2
const sumYSquared = (data) => {
    let count = 0;
    for(let i=0; i<data.length; i++) {
        count = data[i].consumptionLevel + count;
    }
    return Math.pow(count,2);
}


// // // //x*y
const sumXTimesY = function(data) {
    let count = 0;
    for(let i=0;i<data.length;i++) {
        count = data[i].techLevel * data[i].consumptionLevel + count;
    }
    return count;
}


// // // We believe that this is the corrected version of the equation.
// // // The previous version was giving us a correlation > |1|
// const pearsonCorrelation = (n) => {
//     return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum() -(sumXSquared()/n))) * (Math.sqrt(ySquaredSum() -(sumYSquared()/n))));
// }


 

// We have a correlation of ~0.679 with our corrected equation.
const myComputation = (data) => {
    return (sumXTimesY(data) - sumXTimesY(data)/data.length) / ((Math.sqrt(xSquaredSum(data) -(sumXSquared(data)/data.length))) * (Math.sqrt(ySquaredSum(data) -(sumYSquared(data)/data.length))));
}

class CorrelationFinder extends Component {
    state = {  }
    render() {
       return (

           <div>
               <h1>{myComputation(this.props.dataToRead)}</h1>
           </div>
         );
    }
 }
 export default CorrelationFinder;