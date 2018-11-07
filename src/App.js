// Bring React and the component class.
import React, { Component } from 'react';
import logo from './logo.svg';
// CSS for our app.
import './App.css';
// Import the components from another part of the folder.
import Button from './Components/Button'
import Toggle from './Components/Toggle'
import Student from './Components/Toggle'
import Person from './Components/Person'
import TextEntryButton from './Components/TextEntryButton';
import NumberEntryButton from './Components/NumberEntryButton';
import SingleDataEntry from './Components/SingleDataEntry';
import CorrelationFinder from './Components/CorrelationFinder';

// App is a component (inherited from React)
class App extends Component {

  // Our state constant:
  state = {
    // List:
    persons: [
      {id: "A", name: 'Max', age: 28},
      {id: "B", name: 'Dr. Dre', age: 50},
      {id: "C", name: 'Eminem', age: 55}
    ],
    userData: [
      {id: 0, consumptionLevel: 0, techLevel: 0},
      {id: 1, consumptionLevel: 1, techLevel: 1},
      {id: 2, consumptionLevel: 2, techLevel: 2}
    ],
    otherState: 'some other value',
    showPersons: false,
    showStartScreen: true,
    whichScreen: "Start",
    userName: "NoNameEntered",
    currentConsumptionLevel: 0,
    currentTechLevel: 0,
    currentIDNumber: 0
  }
  
  // STUFF FROM LAB 8:
  // pickRandomStudent = () => {
  //   //call this.setState to update our state
  //   this.setState(() => ({
  //     pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
  //   }))
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // our students array
  //     students: [{
  //       name: 'Bob Ross',
  //       img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
  //     },
  //     { 
  //       name: 'Mr Rogers', 
  //       img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'
  //     },
  //     {
  //       name: 'Carrie Fisher',
  //       img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
  //     }
  // ],

  // // Our pickFromAll boolean,
  // pickFromAll: true,
  // pickedStudent: null
  // }
  //}
  // pickRandomStudent = () => {
  //   alert("A random student has been picked.");
  // }

  // UDEMY Tutorial stuff:
  // Name changer:
  switchNameHandler = (newName) => {
    //console.log('Was clicked.');
    this.setState({
      persons: [
        {id: 'A', name: newName, age: 28},
        {id: 'B', name: 'T-Pain', age: 36},
        {id: 'C', name: 'P. Diddy', age: 45}
      ]
    })
  }
  // New name function:
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      // Use the spread operator to break out all the properties.
      ...this.state.persons[personIndex]
    };
    // Update this new name.
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
    // Previous List.
    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28},
    //     {name: event.target.value, age: 36},
    //     {name: 'P. Diddy', age: 45}
    //   ]
    // })
  }
  // Toggle whether or not we see the person class:
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  // Determines which page we are looking at:
  togglePage = (whereToGoNext) => {
    this.setState({whichScreen: whereToGoNext});
  }
  
  // Method for changing our username:
  changeUsername = (event) => {
    this.setState({userName: event.target.value});
  }
  
  // Method for changing our current number.
  addEntryNumber = (event) => {
    this.setState({currentConsumptionLevel: parseInt(event.target.value)});
  }

  // Method for changing our current number.
  changeCurrentTechLevel = (event) => {
    this.setState({currentTechLevel: parseInt(event.target.value)});
  }

  // Add an object to our user data array that is made up of the current consumption and tech level variable
  addEntryTotal = () => {
    // Get all the user data and create a DEEP copy.
    const tempUserData = [...this.state.userData];
    // Add an additional entry to this copy. 
    //Iterate the ID number by one.
    tempUserData.push({id: this.state.currentIDNumber, consumptionLevel: this.state.currentConsumptionLevel, techLevel: this.state.currentTechLevel});
    // Set the state to our new, modified state.
    this.setState({userData: tempUserData});
    
  }
  
  // Reset the entire array:
  clearAllEntryInArray = () => {
    const tempArray = [];
    this.setState({userData: tempArray});
  }

  clearEntryAndGoToResetScreen = () => {
    this.clearAllEntryInArray();
    this.togglePage('ResetList');
  }

  clearEntryAndGoToMainMenu = () => {
    //this.clearAllEntryInArray();
    this.togglePage('MainMenu');
  }

  // 
  //addEntryAndGoToMainMenu() {
  addEntryAndGoToMainMenu = () => {
    this.addEntryTotal();
    this.togglePage('MainMenu');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // persons.splice(personIndex, 1);
    // this.setState({persons:persons});

    // SPREAD OPERATOR METHOD:
    // Spread copies all the elements from the below list and adds them:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    
    // NOT A GOOD METHOD BECAUSE IT IRREVERSIBLY MODIFIES THIS
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // this.setState({persons:persons});
  }

  // Everything that is rendered out:
  render() {
    // Examples of in-line style:
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    const coolStyle = {
      backgroundColor: 'blue'
    };
    const backgroundStyle = {
      backgroundColor: 'lightblue'
    }

    // Person is null by by:
    let persons = null;

    // All of our specific screens:
    let startingScreen = null;
    let nameEntryScreen = null;
    let mainMenuScreen = null;
    let addEntryScreen = null;
    let allListScreen = null;
    let resetListScreen = null;
    let submitListScreen = null;

  

    // Code for rendering all the lists
    if (this.state.whichScreen == "AllListScreen") {
      allListScreen = (
        <div>
          {this.state.userData.map(currentDataEntry => {
            return <SingleDataEntry
              key={currentDataEntry.id}
              consumptionLevel={currentDataEntry.consumptionLevel}
              techLevel={currentDataEntry.techLevel}/>
          })}
          <button onClick={this.togglePage.bind(this, 'MainMenu')}>Main Menu</button>
        </div>
      );
    } else {
      allListScreen = null;
    }

    // Code for rendering the start screen.
    if (this.state.whichScreen == "Start") {
      startingScreen = (
        <div>
          <h1>Count a Cup</h1>
          <button onClick={this.togglePage.bind(this, "NameEntry")}>New User</button>
        </div>
      );
    } else {
      startingScreen = null;
    }

    // Code for rendering the NameEntry screen.
    if (this.state.whichScreen == "NameEntry") {
      nameEntryScreen = (
        <div>
          <h1>Enter Your Name</h1>
          <TextEntryButton changed={this.changeUsername}/>
          <button onClick={this.clearEntryAndGoToMainMenu}>Submit Name</button>
        </div>
      );
    } else {
      nameEntryScreen = null;
    }


    if (this.state.whichScreen == "MainMenu") {
      mainMenuScreen = (
        <div>
          <h1>User: {this.state.userName}</h1>
          
          <button onClick={this.togglePage.bind(this, 'AddEntryPage')}>Add Entry</button>
          <br></br>
          <button onClick={this.clearEntryAndGoToResetScreen}>Reset List</button>
          <br></br>
          <button onClick={this.togglePage.bind(this, 'SubmitListPage')}>Submit List</button>
          <br></br>
          <button onClick={this.togglePage.bind(this, 'NameEntry')}>Change User</button>
          <br></br>
          <button onClick={this.togglePage.bind(this, 'AllListScreen')}>Show All Data</button>
        </div>
      );

    } else {
      mainMenuScreen = null;
    }

    // DATA ENTRY PAGE:
    if (this.state.whichScreen == "AddEntryPage") {
      addEntryScreen = (
        <div>
          <h1>User: {this.state.userName}</h1>
          <h2>Consumption Level:</h2>
          <NumberEntryButton changed={this.addEntryNumber} min="-1" max="3"/>
          <h2>Tech Level: </h2>
          <NumberEntryButton changed={this.changeCurrentTechLevel} min="0" max="2"/>
          <button onClick={this.addEntryAndGoToMainMenu}>Submit</button>
        </div>
      );
    // TURN OFF DATA ENTRY PAGE IF WE NOT USING IT:
    } else {
      addEntryScreen = null;
    }

    // DATA ENTRY PAGE:
    if (this.state.whichScreen == "ResetList") {
      resetListScreen = (
        <div>
          <h1>User: {this.state.userName}</h1>
          <h2>List Reset.</h2>
          <button onClick={this.togglePage.bind(this, 'MainMenu')}>Main Menu</button>
        </div>
      );
    // TURN OFF DATA ENTRY PAGE IF WE NOT USING IT:
    } else {
      resetListScreen = null;
    }

    // Page for submitting the list.
    if (this.state.whichScreen == "SubmitListPage") {
      submitListScreen = (
        <div>
          <h1>User: {this.state.userName}</h1>
          <h2>Correlation is: </h2>
          <CorrelationFinder dataToRead={this.state.userData}></CorrelationFinder>
          <button onClick={this.togglePage.bind(this, 'MainMenu')}>Main Menu</button>
        </div>
      );
    // TURN OFF DATA ENTRY PAGE IF WE NOT USING IT:
    } else {
      submitListScreen = null;
    }




    // CLASS EXAMPLE:
    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              // Index is not a good key.
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />

          })}

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            // Pass the reference to the switch name handler.
            changed={this.nameChangedHandler}
            click = {this.switchNameHandler.bind(this, 'Mr. Paragraph')}
            // Get the second person's name:
            name= {this.state.persons[1].name}
            // Get the second person's age:
            age={this.state.persons[1].age} 
            // Children of this object.
            >My Hobbies: Racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div> 
      );
    }
  

    return (
      <div className="App" style={backgroundStyle}>
        
        {startingScreen}
        {nameEntryScreen}
        {mainMenuScreen}
        {addEntryScreen}
        {allListScreen}
        {resetListScreen}
        {submitListScreen}

        
        
        {/* <button 
        
          style={coolStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> */}

      
        

        {persons}

        {/* <Student student = {this.state.pickedStudent} />
        <Button handleClicked = {this.pickRandomStudent}/>
        <Toggle /> */}


      </div>
    );
    // Alternative way of rendering to React Dom.
    //return React.createElement('div', null, 'h1', 'Hello!')
  }
}



export default App;
