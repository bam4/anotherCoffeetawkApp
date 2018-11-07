import React, { Component } from 'react';

class Student extends Component {
   state = {  }
    render() {
        return (
            <div>{this.props.Student && this.props.Student.name}</div>
        );


    }

   
}
export default Student;