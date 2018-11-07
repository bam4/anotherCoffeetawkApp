//here is a boilerplate component structure
import React, { Component } from 'react';

class Button extends Component {
   state = {  }
   render() {
      return (
          <div><button onClick ={this.props.handleClicked}></button></div>
        );
   }
}
export default Button;