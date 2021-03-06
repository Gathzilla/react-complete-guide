import React, { Component } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = {
    persons: [
      { id: 'qawdgqweg', name: 'Max', age: 28 },
      { id: 'sxdfgqeq1', name: 'Gerardo', age: 23 },
      { id: 'etujertuy', name: 'randomDude', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };



  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});


   
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

     

        let persons = null;
        

        if (this.state.showPersons) {
            persons = (

              
                <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />

            
            );

            
          // style.backgroundColor = 'red';
          // style[':hover'] = {
          //   backgroundColor: 'salmon',
          //   color: 'black'
          // };
        }

       


    return (
      
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked = {this.togglePersonsHandler}
        />
        {persons}
           
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;